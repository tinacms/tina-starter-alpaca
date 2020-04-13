import { shape } from "prop-types"

import { ReactMarkdowStyled } from "./styles"

const MarkdownWrapper = ({ post }) => <ReactMarkdowStyled source={post.markdownBody} />

MarkdownWrapper.propTypes = {
  post: shape(),
}

export default MarkdownWrapper
