import { node } from "prop-types"
import { useInlineForm } from "react-tinacms-inline"
import { useMemo } from "react"

import { DocWrapperStyled } from "./styles"

const DocWrapper = ({ children, preview, styled }) => {
  const { deactivate, activate } = useInlineForm()

  function handleInlineEdit() {
    preview ? activate() : deactivate()
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
