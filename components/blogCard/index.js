import Link from "next/link"
import styled from "styled-components"

import { StyledAnchor } from "../Anchor"

const BlogCardStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.highlight};
  border: 1px solid ${({ theme }) => theme.colors.highlightBorder};
  transition: 0.3s;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    box-shadow: 0 2px 3px 0 ${({ theme }) => theme.colors.highlightBorder};
  }
`

const BlogCard = ({ post }) => {
  const date = new Date(post.data.frontmatter.date)
  const dateOptions = { year: "numeric", month: "long", day: "numeric" }
  return (
    <Link href="blog/[slug]" as={`blog/${post.fileName}`}>
      <StyledAnchor>
        <BlogCardStyled>
          <h1>{post.data.frontmatter.title}</h1>
          <h2>{`${date.toLocaleDateString("en-US", dateOptions)} | ${
            post.data.frontmatter.author
          }`}</h2>
          <p>{post.data.frontmatter.description}</p>
        </BlogCardStyled>
      </StyledAnchor>
    </Link>
  )
}

export default BlogCard
