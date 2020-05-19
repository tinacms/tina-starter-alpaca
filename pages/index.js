import styled from "styled-components"

import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { GetStaticProps } from "next"
import { useGithubJsonForm } from "react-tinacms-github"

const Page = ({ file, preview }) => {
  const formOptions = {
    label: "home page",
    fields: [
      {
        name: "title",
        component: "text",
      },
    ],
  }
  const [data, form] = useGithubJsonForm(file, formOptions)
  return (
    <Layout preview={preview} form={form}>
      <Head title="Home" />
      <Container className="container">
        {/* <Title className="title">{data.title}</Title> */}
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
    // console.log(previewData)

    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/test.json",
      parse: parseJson,
    })
  }
  // render from the file system.
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
