import { shape } from "prop-types"

import CodeBlock from "./CodeBlock"
import Headings from "./Header"

import { ReactMarkdowStyled } from "./styles"

const MarkdownWrapper = ({ post }) => (
  <ReactMarkdowStyled
    source={post.markdownBody}
    renderers={{ code: CodeBlock, heading: Headings }}
  />
)

MarkdownWrapper.propTypes = {
  post: shape(),
}

export default MarkdownWrapper
