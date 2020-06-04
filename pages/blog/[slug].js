import { InlineField, InlineForm } from "react-tinacms-inline"
import matter from "gray-matter"
import { useGithubMarkdownForm } from "react-tinacms-github"
import { getGithubPreviewProps, parseMarkdown } from "next-tinacms-github"
import { Wysiwyg } from "react-tinacms-editor"
import ReactMarkdown from "react-markdown"

import Layout from "@components/layout"
import { usePlugin } from "tinacms"

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
    <Layout title={data.frontmatter.title} preview={props.preview}>
      <InlineForm form={form}>
        <InlineField name="markdownBody">
          {({ input }) => {
            if (props.preview) {
              return <Wysiwyg input={input} />
            }
            return <ReactMarkdown source={input.value} />
          }}
        </InlineField>
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

  if (preview) {
    const previewProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath,
      parse: parseMarkdown,
    })
    return {
      props: {
        ...previewProps.props,
      },
    }
  }

  const content = await import(`../../content/blog/${slug}.md`)
  const data = matter(content.default)
  return {
    props: {
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
