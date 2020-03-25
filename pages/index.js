import Head from "../components/head"
import styled from "styled-components"
import Layout from "../components/layout"
export default () => (
  <Layout>
    <Head title="Home" />
    <Container className="container">
      <h1 className="title">Forestry</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
    </Container>
  </Layout>
)

const Container = styled.div`
  max-width: 80%;
  color: #333;
  margin: 0 auto;
`
