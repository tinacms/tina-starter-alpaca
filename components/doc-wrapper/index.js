import { node, bool } from "prop-types"
import { DocWrapperStyled } from "./styles"

const DocWrapper = ({ children, styled }) => {
  if (styled) {
    return <DocWrapperStyled>{children}</DocWrapperStyled>
  }
  return children
}

DocWrapper.propTypes = {
  children: node,
  styled: bool,
}

export default DocWrapper
