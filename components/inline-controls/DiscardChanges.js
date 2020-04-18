import { useInlineForm } from "react-tinacms-inline"
import { Button as TinaButton } from "@tinacms/styles"
import { useCMS } from "tinacms"

const DiscardButton = () => {
  const cms = useCMS()
  const { status, deactivate, form } = useInlineForm()
  const editing = status === "active"
  if (!editing) return null

  /*
   ** If there are no changes
   ** to discard, return early
   */
  if (form.finalForm.getState().pristine) {
    return null
  }

  return (
    <TinaButton
      color="primary"
      onClick={() => {
        try {
          form.finalForm.reset()
          deactivate()
          cms.alerts.info("Discard changes success")
        } catch (error) {
          deactivate()
          cms.alerts.error("Something failed, please try again")
        }
      }}
    >
      Discard Changes
    </TinaButton>
  )
}

export default DiscardButton
