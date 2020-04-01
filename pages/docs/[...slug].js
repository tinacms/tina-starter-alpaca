import { useCMS, usePlugins } from "tinacms"
import { useRouter } from "next/router"
import matter from "gray-matter"

import { parseNestedDocsMds } from "@utils"
import { createChildPage } from "@plugins"

import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import PostNavigation from "@components/post-navigation"
import PostFeedback from "@components/post-feedback"

const DocTemplate = ({ markdownFile, allDocs }) => {
  const router = useRouter()
  const cms = useCMS()
  const parentObject = allDocs.find((item) => item.key === router.query.slug[0])
  usePlugins(createChildPage(cms, parentObject, router))

  return (
    <Layout allDocs={allDocs}>
      <Head title="Docs" />
      <Container>
        <h1>{markdownFile.frontmatter.title}</h1>
        <PostNavigation allDocs={allDocs} router={router} />
        <PostFeedback />
      </Container>
    </Layout>
  )
}

DocTemplate.getInitialProps = async function (ctx) {
  const { slug } = ctx.query
  const content = await import(`@docs/${slug.join("/")}.md`)
  const data = matter(content.default)

  const docs = ((context) => parseNestedDocsMds(context))(require.context("@docs", true, /\.md$/))

  return {
    markdownFile: {
      fileRelativePath: `src/docs/${slug}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    allDocs: docs,
  }
}

export default DocTemplate
