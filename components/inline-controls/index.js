import styled from "styled-components"

import DiscardChanges from "./DiscardChanges"
import EditToggle from "./EditToggle"
import SaveButton from "./SaveButton"

const InlineEditingControls = () => {
  return (
    <Toolbar>
      <EditToggle />
      <DiscardChanges />
      <SaveButton />
    </Toolbar>
  )
}

export default InlineEditingControls

const Toolbar = styled.div`
  position: absolute;
  right: 15px;

  & button {
    margin-right: 15px;
  }
`
