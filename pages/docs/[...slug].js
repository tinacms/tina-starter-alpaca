import { useMemo } from "react"
import matter from "gray-matter"
import algoliasearch from "algoliasearch/lite"
import { array, shape, string } from "prop-types"
import { useRouter } from "next/router"
import {
  getGithubPreviewProps,
  parseMarkdown,
  parseJson,
  getFiles as getGithubFiles,
} from "next-tinacms-github"
import axios from "axios"

import Head from "@components/head"
import Layout from "@components/layout"
import PostNavigation from "@components/post-navigation"
import PostFeedback from "@components/post-feedback"
import SideNav from "@components/side-nav"
import DocWrapper from "@components/doc-wrapper"
import MarkdownWrapper from "@components/markdown-wrapper"
import Toc from "@components/Toc"

import { parseNestedDocsMds, flatDocs, createToc } from "@utils"
import { useFormEditDoc, useCreateChildPage } from "@hooks"

import { useCMS } from "tinacms"
import { useInlineForm, InlineForm, InlineTextField, InlineWysiwyg } from "react-tinacms-inline"
import InlineEditingControls from "@components/inline-controls"

const DocTemplate = (props) => {
  const router = useRouter()
  const cms = useCMS()

  // const { deactivate, activate } = useInlineForm()

  // function handleInlineEdit() {
  //   props.preview ? activate() : deactivate()
  // }
  // useMemo(handleInlineEdit, [props.preview] )

  // debugger;

  // console.log({allnested: props.allNestedDocs})
  // useCreateChildPage(props.allNestedDocs)
  // console.log({file: props.file})
  const [data, form] = useFormEditDoc(props.file)

  if (!form) return null
  return (
    <Layout showDocsSearcher splitView preview={props.preview} form={form}>
      <Head title={data.frontmatter.title} />
      <SideNav
        allNestedDocs={props.allNestedDocs}
        currentSlug={router.query.slug}
        groupIn={data.frontmatter.groupIn}
      />
      <DocWrapper preview={props.preview}>
        {process.env.NODE_ENV !== "production" && <InlineEditingControls />}
        <main>
          <h1>
            <InlineTextField name="frontmatter.title" />
          </h1>
          {/* {props.Alltocs.length > 0 && <Toc tocItems={props.Alltocs} />} */}
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

export const getStaticProps = async function ({ preview, previewData, query, params }) {
  const { slug } = params
  console.log({ fileRelativePath: `docs/${slug.join("/")}.md` })
  // const allNestedDocs = ((context) => parseNestedDocsMds(context))(
  //   //eslint-disable-next-line
  //   require.context("@docs", true, /\.md$/)
  // )
  // console.log(allNestedDocs)

  const allNestedDocs = parseNestedDocsMds(require.context("@docs", true, /\.md$/))
  if (preview) {
    try {
      // const newNested = await axios({
      //   method: 'GET',
      //   url: `https://api.github.com/repos/${previewData.working_repo_full_name}/contents/docs/?ref=${previewData.head_branch}`,
      //   headers: {
      //     Authorization: 'token ' + previewData.github_access_token,
      //   },
      // })
      // const newNested = await getGithubFiles(
      //   'docs/',
      //   previewData.working_repo_full_name,
      //   previewData.head_branch,
      //   previewData.github_access_token
      // )
      // console.log(newNested)
    } catch (e) {
      console.log(e)
    }
    const previewProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: `docs/${slug.join("/")}.md`,
      parse: parseMarkdown,
    })
    let Alltocs = ""

    if (typeof window === "undefined") {
      Alltocs = createToc(previewProps.props.file.data.markdownBody)
    }

    return {
      props: {
        ...previewProps.props,
        allNestedDocs,
        Alltocs,
      },
    }
  }

  const content = await import(`@docs/${slug.join("/")}.md`)
  // console.log({ content })
  const data = matter(content.default)

  // Create Toc
  // TODO: this works only on SSR, it doesn't work for client routing
  let Alltocs = ""

  if (typeof window === "undefined") {
    Alltocs = createToc(data.content)
  }

  // console.log(JSON.stringify(allNestedDocs))

  return {
    props: {
      file: {
        fileRelativePath: `./docs/${slug.join("/")}.md`,
        data: {
          frontmatter: data.data,
          markdownBody: data.content,
        },
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
    fallback: false,
    paths: files
      // .filter(file => !file.endsWith('index.md'))
      .map((file) => {
        const path = file.substring(contentDir.length, file.length - 3)
        return { params: { slug: path.split("/") } }
      }),
  }
}

// DocTemplate.propTypes = {
//   allNestedDocs: array,
//   markdownFile: shape(),
//   Alltocs: string,
// }

export default DocTemplate
