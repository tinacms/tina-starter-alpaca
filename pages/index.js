import Head from "../components/head"
import styled from "styled-components"
import Layout from "../components/layout"
import Container from "../components/container"

export default () => (
  <Layout>
    <Head title="Home" />
    <Container>
      <h1 className="title">Forestry</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
    </Container>
  </Layout>
)
