import Head from "../components/head"
import styled from "styled-components"
import Layout from "../components/layout"
import Container from "../components/Container"

export default () => (
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

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
