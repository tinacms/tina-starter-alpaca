import { useGithubJsonForm } from "react-tinacms-github"

import { flatDocs } from "@utils"

/*
    Adds a form for changing the order of the doc navigation and adding new things to the navignation
*/

const useNavigationForm = (jsonFile, preview) => {
  if (!preview) {
    // if we are not in preview return the jsonfile and dont register the form
    return [jsonFile.data, null]
  }
  const allFlatDocs = flatDocs(jsonFile.data.config)

  // the list of slugs
  const slugList = allFlatDocs.map((el) => el.slug)

  // the fields for the doc pages
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
      label: "Choose linked page",
      name: "slug",
      component: "select",
      options: slugList,
    },
  ]

  // this returns the children group list field
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
        slug: "getting-started",
        title: "new doc page",
        children: [],
      }),
    }
  }
  const formOptions = {
    label: "Navigation",
    __type: "screen",
    fields: [
      {
        ...childrenGroupListField("Doc list", "config"),
        fields: [
          // cant have top level groups
          ...docFields.filter((item) => item.name !== "type"),
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
  // returns the in the form [jsonFile, Form]
  return useGithubJsonForm(jsonFile, formOptions)
}
export default useNavigationForm
