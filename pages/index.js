import { useEffect } from "react"
import styled from "styled-components"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm } from "react-tinacms-github"
import Router from "next/router"

import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import { usePlugin } from "tinacms"
import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import { useGlobalStyleForm } from "@hooks"

const Page = ({ file, preview, styleFile }) => {
  // can remove this if you want to use the index page
  useEffect(() => {
    const { pathname } = Router
    if (pathname == "/") {
      Router.push("/docs")
    }
  })
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
  usePlugin(form)

  const [styleData, styleForm] = useGlobalStyleForm(styleFile, preview)

  return (
    <Layout form={form} theme={styleData}>
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
  const global = await getGlobalStaticProps(preview, previewData)

  if (preview) {
    // get data from github
    const file = (
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "content/home.json",
        parse: parseJson,
      })
    ).props

    return {
      props: {
        ...file,
        ...global,
      },
    }
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
      ...global,
    },
  }
}

export default Page
