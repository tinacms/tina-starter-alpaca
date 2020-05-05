import styled from "styled-components"

import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { GetStaticProps } from "next"

const Page = ({ file }) => {
  const data = file.data
  return (
    <Layout>
      <Head title="Home" />
      <Container className="container">
        <Title className="title">{data.title}</Title>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
      </Container>
    </Layout>
  )
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData }) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/home.json",
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../content/home.json")).default,
      },
    },
  }
}

export default Page
