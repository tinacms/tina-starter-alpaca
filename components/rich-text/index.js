import { node } from "prop-types"
import { StyledRichText } from "./styles"

const RichText = ({ children }) => {
  return <StyledRichText>{children}</StyledRichText>
}

RichText.propTypes = {
  children: node,
}

export default RichText
