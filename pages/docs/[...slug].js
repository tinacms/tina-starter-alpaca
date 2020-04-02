import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import { array, shape } from "prop-types"

import { parseNestedDocsMds } from "@utils"

import { useFormEditDoc, useCreateChildPage } from "@hooks"

import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import PostNavigation from "@components/post-navigation"
import PostFeedback from "@components/post-feedback"

const DocTemplate = ({ markdownFile, allDocs }) => {
  useCreateChildPage(allDocs)
  const [post] = useFormEditDoc(markdownFile)

  return (
    <Layout allDocs={allDocs}>
      <Head title="Docs" />
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <ReactMarkdown source={post.markdownBody} />

        <PostNavigation allDocs={allDocs} />
        <PostFeedback />
      </Container>
    </Layout>
  )
}

DocTemplate.getInitialProps = async function (ctx) {
  const { slug } = ctx.query
  const content = await import(`@docs/${slug.join("/")}.md`)
  const data = matter(content.default)
  //eslint-disable-next-line
  const docs = ((context) => parseNestedDocsMds(context))(require.context("@docs", true, /\.md$/))

  return {
    markdownFile: {
      fileRelativePath: `docs/${slug.join("/")}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    allDocs: docs,
  }
}

DocTemplate.propTypes = {
  allDocs: array,
  markdownFile: shape(),
}

export default DocTemplate
