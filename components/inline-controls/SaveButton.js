import { useInlineForm } from "react-tinacms-inline"
import { Button as TinaButton } from "@tinacms/styles"

const SaveButton = () => {
  const { form } = useInlineForm()

  /*
   ** If there are no changes
   ** to save, return early
   */
  if (form.finalForm.getState().pristine) {
    return null
  }

  return <TinaButton onClick={form.submit}>Save</TinaButton>
}

export default SaveButton
