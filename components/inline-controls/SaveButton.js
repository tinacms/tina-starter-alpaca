import { useInlineForm } from "react-tinacms-inline"
import { Button as TinaButton } from "@tinacms/styles"
import { useCMS } from "tinacms"

const SaveButton = () => {
  const cms = useCMS()
  const { status, deactivate, form } = useInlineForm()
  const editing = status === "active"
  if (!editing) return null

  /*
   ** If there are no changes
   ** to save, return early
   */
  if (form.finalForm.getState().pristine) {
    return null
  }

  return (
    <TinaButton
      onClick={() => {
        try {
          form.submit()
          deactivate()
          cms.alerts.success("Your changes are safe!")
        } catch (error) {
          console.log(error)
        }
      }}
    >
      Save
    </TinaButton>
  )
}

export default SaveButton
