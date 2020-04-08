import matter from "gray-matter"
import algoliasearch from "algoliasearch/lite"
import ReactMarkdown from "react-markdown"
import { array, shape } from "prop-types"

import { parseNestedDocsMds, flatDocs } from "@utils"

import { useFormEditDoc, useCreateChildPage } from "@hooks"

import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import PostNavigation from "@components/post-navigation"
import PostFeedback from "@components/post-feedback"

const DocTemplate = ({ markdownFile, allNestedDocs }) => {
  useCreateChildPage(allNestedDocs)
  const [post] = useFormEditDoc(markdownFile)

  return (
    <Layout allNestedDocs={allNestedDocs} showDocsSearcher>
      <Head title="Docs" />
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <ReactMarkdown source={post.markdownBody} />

        <PostNavigation allNestedDocs={allNestedDocs} />
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
  const allNestedDocs = ((context) => parseNestedDocsMds(context))(
    require.context("@docs", true, /\.md$/)
  )

  // Update data in algolia
  const searchClient = algoliasearch("ND3Q3FDRQR", "16cffa070a73fdfb1ec9d95f9bd8afe7")
  const index = searchClient.initIndex("docs_index")
  const allFlattedDocs = flatDocs(allNestedDocs)
  index.replaceAllObjects(allFlattedDocs, { autoGenerateObjectIDIfNotExist: true })

  return {
    markdownFile: {
      fileRelativePath: `docs/${slug.join("/")}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    allNestedDocs,
  }
}

DocTemplate.propTypes = {
  allNestedDocs: array,
  markdownFile: shape(),
}

export default DocTemplate
