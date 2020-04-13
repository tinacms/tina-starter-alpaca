import styled from "styled-components"
import ReactMarkdown from "react-markdown"

export const ReactMarkdowStyled = styled(ReactMarkdown)`
  p {
    font-size: 16px;
    line-height: 32px;
    margin: 0;
    margin-bottom: 1.5rem;
    letter-spacing: -0.1px;
  }
  a {
    color: #0071f0;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ul {
    padding-left: 18px;
    margin-bottom: 2rem;
    li {
      margin-bottom: 1rem;
    }
  }
  h2 {
    font-size: 32px;
    line-height: 36px;
    color: #333333;
    font-weight: 700;
    margin: 0;
    margin-bottom: 12px;
  }
  img {
    width: 100%;
  }
`
