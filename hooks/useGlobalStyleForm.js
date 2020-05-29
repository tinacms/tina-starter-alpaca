import { useGithubJsonForm } from "react-tinacms-github"
import { useFormScreenPlugin } from "tinacms"

const useGlobalStyleForm = (styleFile, preview) => {
  if (!preview) {
    // if we are not in preview return the jsonfile and dont register the form
    return [styleFile.data, null]
  }

  const styleFormOptions = {
    label: "Theme",
    layout: "fullscreen",
    fields: [
      {
        label: "Site Name",
        name: "siteName",
        component: "text",
      },
      {
        label: "Logo",
        name: "logo",
        component: "text",
      },
      {
        label: "Description",
        name: "description",
        component: "text",
      },
      {
        label: "Colors",
        name: "colors",
        component: "group",
        fields: [
          {
            name: "primary",
            component: "color",
          },
          {
            name: "highlightBorder",
            component: "color",
          },
          {
            name: "background",
            component: "color",
          },
          {
            name: "text",
            component: "color",
          },
          {
            name: "highlight",
            component: "color",
          },
          {
            name: "secondary",
            component: "color",
          },
        ],
      },
      {
        name: "fonts.body",
        component: "text",
      },
    ],
  }

  const [styleData, styleForm] = useGithubJsonForm(styleFile, styleFormOptions)

  useFormScreenPlugin(styleForm)
  return [styleData, styleForm]
}
export default useGlobalStyleForm
