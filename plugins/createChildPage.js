import { toMarkdownString } from "@utils"

export default (cms, parentObject, router) => {
  return [
    {
      __type: "content-creator",
      name: `Create Child Page for ${parentObject.title}`,
      fields: [
        {
          name: "slug",
          label: "Slug",
          component: "text",
          required: true,
        },
        {
          name: "title",
          label: "Title",
          component: "text",
          required: true,
        },
        {
          name: "groupIn",
          label: "Group in",
          description: "Group under a name to create a 3rd level",
          component: "text",
        },
      ],
      onSubmit: ({ slug, title, groupIn }) => {
        return cms.api.git
          .writeToDisk({
            fileRelativePath: `docs/${router.query.slug[0]}/${slug}.md`,
            content: toMarkdownString({
              fileRelativePath: `docs/${router.query.slug[0]}/${slug}.md`,
              rawFrontmatter: {
                title,
                groupIn: groupIn || "",
              },
            }),
          })
          .then(() => {
            setTimeout(() => router.push(`/docs/${router.query.slug[0]}/${slug}`), 1500)
          })
      },
    },
  ]
}
