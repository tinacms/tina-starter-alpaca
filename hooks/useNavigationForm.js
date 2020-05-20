import { useGithubJsonForm } from "react-tinacms-github"

/*
    Adds a form for changing the order of the doc navigation and adding new things to the navignation
*/
const useNavigationForm = (jsonFile) => {
  const docFields = [
    {
      label: "title",
      name: "title",
      component: "text",
    },
    {
      label: "Type (link or or group)",
      name: "type",
      component: "text",
    },
    {
      label: "Enter the Slug",
      name: "slug",
      component: "text",
    },
    {
      label: "key",
      name: "key",
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
        key: item.slug,
        label: item.title,
      }),
      defaultItem: () => ({
        type: "link",
        key: "getting-started",
        slug: "getting-started/TOP",
        title: "new doc page",
        position: null,
        children: [],
      }),
    }
  }
  // TODO: clean this up
  const formOptions = {
    label: "Navigation",
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
