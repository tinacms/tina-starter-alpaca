import styled from "styled-components"

import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { GetStaticProps } from "next"
import { useGithubJsonForm } from "react-tinacms-github"
import { useGlobalForm } from "tinacms"

const Page = ({ file, preview }) => {
  const formOptions = {
    fields: [
      {
        label: "Doc list",
        name: "config",
        component: "group-list",
        description: "test",
        itemProps: (item) => ({
          key: item.slug,
          label: item.title,
        }),
        defaultItem: () => ({
          name: "New Author",
          id: Math.random().toString(36).substr(2, 9),
        }),
        fields: [
          {
            label: "type",
            name: "type",
            component: "text",
          },
          {
            label: "title",
            name: "title",
            component: "text",
          },
        ],
      },
      //...
    ],
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
  // useGlobalForm(form)

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
      fileRelativePath: "docs/config.json",
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
        fileRelativePath: "docs/config.json",
        data: (await import("../content/home.json")).default,
      },
    },
  }
}

export default Page
