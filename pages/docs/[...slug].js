import { useMemo } from "react"
import matter from "gray-matter"
import algoliasearch from "algoliasearch/lite"
import { array, shape, string } from "prop-types"
import { useRouter } from "next/router"
import Error from "next/error"
import {
  getGithubPreviewProps,
  parseMarkdown,
  parseJson,
  getFiles as getGithubFiles,
} from "next-tinacms-github"

import Head from "@components/head"
import Layout from "@components/layout"
import PostNavigation from "@components/post-navigation"
import PostFeedback from "@components/post-feedback"
import SideNav from "@components/side-nav"
import DocWrapper from "@components/doc-wrapper"
import MarkdownWrapper from "@components/markdown-wrapper"
import Toc from "@components/Toc"
import { useCreateMainDoc } from "@hooks"

import { parseNestedDocsMds, flatDocs, createToc } from "@utils"
import { useFormEditDoc, useCreateChildPage, useNavigationForm } from "@hooks"

import { useFormScreenPlugin, usePlugin } from "tinacms"
import { useInlineForm, InlineForm, InlineTextField, InlineWysiwyg } from "react-tinacms-inline"
import { useGithubToolbarPlugins } from "react-tinacms-github"

import InlineEditingControls from "@components/inline-controls"

const DocTemplate = (props) => {
  const router = useRouter()
  if (!props.file) {
    return <Error statusCode={404} />
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  useGithubToolbarPlugins()
  const [data, form] = useFormEditDoc(props.file)
  const [jsonData, jsonForm] = useNavigationForm(props.jsonFile, props.preview)

  useFormScreenPlugin(jsonForm)
  // wrappers around using the content-creator puglin with tinaCMS
  useCreateMainDoc(props.allNestedDocs)
  useCreateChildPage(props.allNestedDocs)

  if (!form) return null
  return (
    <Layout showDocsSearcher splitView preview={props.preview} form={form}>
      <Head title={data.frontmatter.title} />
      <SideNav
        allNestedDocs={props.allNestedDocs}
        currentSlug={router.query.slug}
        // This will have to change to JSON
        groupIn={data.frontmatter.groupIn}
      />
      <DocWrapper preview={props.preview}>
        {process.env.NODE_ENV !== "production" && <InlineEditingControls />}
        <main>
          <h1>
            <InlineTextField name="frontmatter.title" />
          </h1>
          {!props.preview && props.Alltocs.length > 0 && <Toc tocItems={props.Alltocs} />}
          <InlineWysiwyg
            // TODOL: fix this
            // imageProps={{
            //   async upload(files) {
            //     const directory = "/public/images/"

            //     let media = await cms.media.store.persist(
            //       files.map((file) => {
            //         return {
            //           directory,
            //           file,
            //         }
            //       })
            //     )
            //     return media.map((m) => `/images/${m.filename}`)
            //   },
            //   previewUrl: (str) => str,
            // }}
            name="markdownBody"
          >
            <MarkdownWrapper source={data.markdownBody} />
          </InlineWysiwyg>
        </main>

        <PostNavigation allNestedDocs={props.allNestedDocs} />
        <PostFeedback />
      </DocWrapper>
    </Layout>
  )
}

export const getStaticProps = async function ({ preview, previewData, params }) {
  const { slug } = params
  console.log({ fileRelativePath: `docs/${slug.join("/")}.md` })

  const fileRelativePath = `docs/${slug.join("/")}.md`

  // OLD WAY OF GETTING ALL NESTED DOCS
  // const allNestedDocs = ((context) => parseNestedDocsMds(context))(
  //   //eslint-disable-next-line
  //   require.context("@docs", true, /\.md$/)
  // )

  // we will use this when we are keeping a working copy of config.json
  const allNestedDocs = require("../../docs/config.json").config

  // we need these to be in scope for the catch statment
  let previewProps
  let allNestedDocsRemote
  // if we are in preview mode we will get the contents from github
  if (preview) {
    try {
      previewProps = await getGithubPreviewProps({
        ...previewData,
        fileRelativePath,
        parse: parseMarkdown,
      })
      allNestedDocsRemote = await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "docs/config.json",
        parse: parseJson,
      })
      let Alltocs = ""

      if (typeof window === "undefined") {
        Alltocs = createToc(previewProps.props.file.data.markdownBody)
      }
      return {
        props: {
          ...previewProps.props,
          jsonFile: {
            ...allNestedDocsRemote.props.file,
            fileRelativePath: `docs/config.json`,
          },
          allNestedDocs: allNestedDocsRemote.props.file.data.config,
          Alltocs,
        },
      }
    } catch (e) {
      return {
        props: {
          ...previewProps.props,
          ...allNestedDocsRemote.props,
        },
      }
    }
  }

  // Not in preview mode so we will get contents from the file system
  const content = await import(`@docs/${slug.join("/")}.md`)
  const data = matter(content.default)

  // Create Toc
  // TODO: this works only on SSR, it doesn't work for client routing
  let Alltocs = ""

  if (typeof window === "undefined") {
    Alltocs = createToc(data.content)
  }

  return {
    props: {
      file: {
        fileRelativePath: `docs/${slug.join("/")}.md`,
        data: {
          frontmatter: data.data,
          markdownBody: data.content,
        },
      },
      jsonFile: {
        fileRelativePath: `docs/config.json`,
        data: allNestedDocs,
      },
      allNestedDocs,
      Alltocs,
      preview: false,
      error: null,
    },
  }
}

export const getStaticPaths = async function () {
  const fg = require("fast-glob")
  const contentDir = "docs/"
  const files = await fg(`${contentDir}**/*.md`)
  return {
    fallback: true,
    paths: files
      // .filter(file => !file.endsWith('index.md'))
      .map((file) => {
        const path = file.substring(contentDir.length, file.length - 3)
        return { params: { slug: path.split("/") } }
      }),
  }
}

export default DocTemplate
