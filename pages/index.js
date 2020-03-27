import Head from "../components/head"
import Layout from "../components/layout"
import Container from "../components/container"

const Page = () => {
  return (
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
}

export default Page
