import Link from "next/link"
import { InlineForm, InlineTextField } from "react-tinacms-inline"
import matter from "gray-matter"
import { useGithubMarkdownForm } from "react-tinacms-github"
import { getGithubPreviewProps, parseMarkdown } from "next-tinacms-github"
import { InlineWysiwyg } from "react-tinacms-editor"

import Head from "@components/head"
import InlineEditingControls from "@components/inline-controls"
import Layout from "@components/layout"
import Toc from "@components/Toc"
import PostFeedback from "@components/post-feedback"
import DocWrapper from "@components/doc-wrapper"
import MarkdownWrapper from "@components/markdown-wrapper"
import { PrimaryAnchor } from "@components/Anchor"
import { usePlugin } from "tinacms"
import { createToc } from "@utils"

const BlogPage = (props) => {
  const formOptions = {
    label: "Edit doc page",
    fields: [
      {
        name: "frontmatter.title",
        label: "Title",
        component: "text",
      },
    ],
  }

  const [data, form] = useGithubMarkdownForm(props.file, formOptions)
  usePlugin(form)

  return (
    <Layout preview={props.preview}>
      <Head title={`${data.frontmatter.title} | Blog`} />
      <p>
        <Link href="/blog">
          <PrimaryAnchor>Blog</PrimaryAnchor>
        </Link>{" "}
        / {data.frontmatter.title}
      </p>
      <InlineForm form={form}>
        <DocWrapper preview={props.preview}>
          {props.preview && <InlineEditingControls />}
          <main>
            <h1>
              <InlineTextField name="frontmatter.title" />
            </h1>
            {!props.preview && props.Alltocs.length > 0 && <Toc tocItems={props.Alltocs} />}

            <InlineWysiwyg name="markdownBody">
              <MarkdownWrapper source={data.markdownBody} />
            </InlineWysiwyg>
          </main>
          <PostFeedback />
        </DocWrapper>
      </InlineForm>
    </Layout>
  )
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData, params }) {
  const { slug } = params
  const fileRelativePath = `content/blog/${slug}.md`
  let Alltocs = ""

  if (preview) {
    const previewProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath,
      parse: parseMarkdown,
    })
    if (typeof window === "undefined") {
      Alltocs = createToc(previewProps.props.file.data.markdownBody)
    }
    return {
      props: {
        Alltocs,
        ...previewProps.props,
      },
    }
  }

  const content = await import(`../../content/blog/${slug}.md`)
  const data = matter(content.default)

  if (typeof window === "undefined") {
    Alltocs = createToc(data.content)
  }
  return {
    props: {
      Alltocs,
      sourceProvider: null,
      error: null,
      preview: false,
      // the markdown file
      file: {
        fileRelativePath,
        data: {
          frontmatter: data.data,
          markdownBody: data.content,
        },
      },
    },
  }
}

export const getStaticPaths = async function () {
  const fg = require("fast-glob")
  const contentDir = "content/blog"
  const files = await fg(`${contentDir}**/*.md`)
  const paths = files
    .filter((file) => !file.endsWith("index.md"))
    .map((file) => {
      const path = file.substring(contentDir.length + 1, file.length - 3)
      return { params: { slug: path } }
    })
  return {
    fallback: false,
    paths,
  }
}

export default BlogPage
