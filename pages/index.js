import styled from "styled-components"

import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/Container"

const Page = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Container className="container">
        <Title className="title">Forestry</Title>
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

export default Page
