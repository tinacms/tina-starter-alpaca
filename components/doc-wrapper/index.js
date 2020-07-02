import { node } from "prop-types"
import { useMemo } from "react"

import { DocWrapperStyled } from "./styles"
import { useCMS } from "tinacms"

const DocWrapper = ({ children, preview, styled }) => {
  const cms = useCMS()
  function handleInlineEdit() {
    preview ? cms.enable() : cms.disable()
  }
  useMemo(handleInlineEdit, [preview])
  if (styled) {
    return <DocWrapperStyled>{children}</DocWrapperStyled>
  }
  return children
}

DocWrapper.propTypes = {
  children: node,
}

export default DocWrapper
