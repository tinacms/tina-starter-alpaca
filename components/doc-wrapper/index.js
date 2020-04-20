import { node } from "prop-types"

import { DocWrapperStyled } from "./styles"

const DocWrapper = ({ children }) => {
  return <DocWrapperStyled>{children}</DocWrapperStyled>
}

DocWrapper.propTypes = {
  children: node,
}

export default DocWrapper
