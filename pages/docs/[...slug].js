import Head from "@components/head"
import matter from "gray-matter"

import { parseNestedDocsMds } from '@utils'

import Layout from "@components/layout"
import Container from "@components/container"

const DocTemplate = ({ markdownFile, allDocs }) => {
	return (
		<Layout allDocs={allDocs}>
      <Head title="Docs" />
      <Container>
        <h1>
					I am a doc PAGE for {markdownFile.frontmatter.title}
				</h1>
      </Container>
    </Layout>
	)
}

DocTemplate.getInitialProps = async function(ctx) {
	const { slug } = ctx.query
	const content = await import(`@docs/${slug.join('/')}.md`)
	const data = matter(content.default)

	const docs = (context => {
		const keys = context.keys()
		const data = keys.reduce((newData, key) => {
      newData = parseNestedDocsMds(key, newData)
			return newData;
    }, [])
		return data
	})(require.context('@docs', true, /\.md$/))

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
