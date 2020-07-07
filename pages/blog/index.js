import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import { getBlogPosts } from "@utils"
import { useGlobalStyleForm } from "@hooks"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"
import useCreateBlogPage from "../../hooks/useCreateBlogPage"
import BlogCard from "@components/blogCard"

const Blog = (props) => {
  useCreateBlogPage(props.posts)
  const [styleData] = useGlobalStyleForm(props.styleFile, props.preview)
  return (
    <Layout
      searchText="Search blog posts"
      showDocsSearcher
      searchIndex="tina-starter-alpaca-Blogs"
      theme={styleData}
    >
      <Head title="Blog" />
      <Container>
        <h1>Blog</h1>
        {props.posts.map((post) => {
          return <BlogCard key={post.fileName} post={post} />
        })}
      </Container>
    </Layout>
  )
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData }) {
  try {
    const posts = await getBlogPosts(preview, previewData, "content/blog")
    const global = await getGlobalStaticProps(preview, previewData)
    if (preview) {
      return {
        props: {
          ...global,
          preview,
          posts,
        },
      }
    }
    return {
      props: {
        ...global,
        posts,
        preview: false,
        error: null,
      },
    }
  } catch (e) {
    return {
      props: {
        ...global,
      },
    }
  }
}

export default Blog
