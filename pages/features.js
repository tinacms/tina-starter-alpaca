import styled from "styled-components"

import Head from "../components/head"
import Layout from "../components/layout"

const Features = () => {
  return (
    <Layout>
      <Head title="Features" />
      <Container>
        <h1>Features</h1>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  max-width: 80%;
  color: #333;
  margin: 0 auto;
`

export default Features
