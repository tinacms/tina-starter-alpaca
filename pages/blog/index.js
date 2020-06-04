import Link from "next/link"
import styled from "styled-components"

import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import { getBlogPosts } from "@utils"
import { useGlobalStyleForm } from "@hooks"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"

const BlogCardStyled = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: inherit; /* no underline */
`

const BlogCard = ({ post }) => {
  return (
    <Link href={`blog/${post.fileName}`}>
      <StyledAnchor>
        <BlogCardStyled>
          <h1>{post.data.frontmatter.title}</h1>
          <h2>{`${post.data.frontmatter.date} | ${post.data.frontmatter.author}`}</h2>
          <p>{post.data.frontmatter.description}</p>
        </BlogCardStyled>
      </StyledAnchor>
    </Link>
  )
}
const Blog = (props) => {
  const [styleData] = useGlobalStyleForm(props.styleFile, props.preview)

  return (
    <Layout theme={styleData}>
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
    console.log({ global })
    if (preview) {
      return {
        props: {
          ...global,
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
    console.log({ error: e })
    return {
      props: {
        ...global,
      },
    }
  }
}

export default Blog
