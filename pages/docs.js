import styled from "styled-components"

import Head from "../components/head"
import Layout from "../components/layout"

const Docs = () => {
  return (
    <Layout>
      <Head title="Docs" />
      <Container>
        <h1>Docs</h1>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  max-width: 80%;
  color: #333;
  margin: 0 auto;
`

export default Docs
