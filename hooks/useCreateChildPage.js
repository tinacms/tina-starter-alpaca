import { useCMS, usePlugins } from "tinacms"
import { useRouter } from "next/router"

import { toMarkdownString } from "@utils"

const useCreateChildPage = (allDocs) => {
  const router = useRouter()
  const cms = useCMS()
  const parentObject = allDocs.find((item) => item.key === router.query.slug[0])
  usePlugins([
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
        const fileRelativePath = `docs/${router.query.slug[0]}/${slug}.md`
        return cms.api.github
          .commit(
            fileRelativePath,
            null,
            toMarkdownString({
              fileRelativePath,
              rawFrontmatter: {
                title,
                groupIn: groupIn || "",
              },
            })
          )
          .then(() => {
            setTimeout(() => router.push(`/docs/${router.query.slug[0]}/${slug}`), 1500)
          })
      },
    },
  ])
}

export default useCreateChildPage
