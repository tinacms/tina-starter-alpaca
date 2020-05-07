import { node } from "prop-types"
import { useInlineForm } from "react-tinacms-inline"
import { useMemo } from "react"

import { DocWrapperStyled } from "./styles"

const DocWrapper = ({ children, preview }) => {
  const { deactivate, activate } = useInlineForm()

  function handleInlineEdit() {
    preview ? activate() : deactivate()
  }
  useMemo(handleInlineEdit, [preview])

  return <DocWrapperStyled>{children}</DocWrapperStyled>
}

DocWrapper.propTypes = {
  children: node,
}

export default DocWrapper
