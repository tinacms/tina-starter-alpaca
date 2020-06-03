import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"

const Features = ({ preview }) => {
  return (
    <Layout preview={preview}>
      <Head title="Features" />
      <Container>
        <h1>Features</h1>
      </Container>
    </Layout>
  )
}

export default Features
