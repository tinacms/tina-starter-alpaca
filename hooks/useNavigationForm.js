import { useGithubJsonForm } from "react-tinacms-github"
import { useRouter } from "next/router"
/*
    Adds a form for changing the order of the doc navigation and adding new things to the navignation
*/
const useNavigationForm = (jsonFile) => {
  const router = useRouter()
  const docFields = [
    {
      label: "title",
      name: "title",
      component: "text",
    },
    {
      label: "Type (link or or group)",
      name: "type",
      component: "select",
      options: ["link", "group"],
    },
    {
      label: "Enter the Slug",
      name: "slug",
      component: "text",
    },
  ]
  const childrenGroupListField = (label = "Children", name = "children", description = "test") => {
    return {
      label,
      name,
      component: "group-list",
      description,
      itemProps: (item) => ({
        label: `${item.title} (${item.type})`,
      }),
      defaultItem: () => ({
        type: "link",
        slug: "getting-started/TOP",
        title: "new doc page",
        id: Math.random().toString(36).substr(2, 9),
        children: [],
      }),
    }
  }
  // TODO: clean this up
  const formOptions = {
    label: "Navigation",
    onSubmit: (data) => {
      console.log(data)
    },
    fields: [
      {
        ...childrenGroupListField("Doc list", "config"),
        fields: [
          ...docFields,
          {
            ...childrenGroupListField(),
            fields: [
              ...docFields,
              {
                ...childrenGroupListField(),
                fields: [...docFields],
              },
            ],
          },
        ],
      },
      //...
    ],
  }
  // returns the in the form
  return useGithubJsonForm(jsonFile, formOptions)
}
export default useNavigationForm
