import { useCMS, usePlugins } from "tinacms"
import { useRouter } from "next/router"

import { toMarkdownString } from "@utils"

const useCreateMainDoc = () => {
  const router = useRouter()
  const cms = useCMS()
  usePlugins([
    {
      __type: "content-creator",
      name: "Create Main Doc Page",
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
      ],
      onSubmit: ({ slug, title }) => {
        return cms.api.git
          .writeToDisk({
            fileRelativePath: `docs/${slug}/index.md`,
            content: toMarkdownString({
              fileRelativePath: `docs/${slug}/index.md`,
              rawFrontmatter: {
                title,
              },
            }),
          })
          .then(() => setTimeout(() => router.push(`/docs/${slug}/index`), 1500))
      },
    },
  ])
}

export default useCreateMainDoc
