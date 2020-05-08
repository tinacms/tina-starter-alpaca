import { useCMS, usePlugins } from "tinacms"
import { useRouter } from "next/router"

import { toMarkdownString } from "@utils"

const useCreateMainDoc = () => {
  const router = useRouter()
  const cms = useCMS()
  const fs = require("fs")
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
      onSubmit: async ({ slug, title }) => {
        const fileRelativePath = `docs/${slug}/index.md`

        return cms.api.github
          .commit(
            fileRelativePath,
            getCachedFormData(fileRelativePath).sha,
            toMarkdownString({
              fileRelativePath,
              rawFrontmatter: {
                title,
              },
            }),
            "Update from TinaCMS"
          )
          .then((response) => {
            setCachedFormData(fileRelativePath, {
              sha: response.content.sha,
            })
            setTimeout(() => router.push(`/docs/${slug}/index`), 1500)
          })
          .catch((e) => {
            return { [FORM_ERROR]: e }
          })
      },
    },
  ])
}

const getCachedFormData = (id) => {
  if (typeof localStorage === "undefined") {
    return {}
  }
  return JSON.parse(localStorage.getItem(id) || "{}")
}

const setCachedFormData = (id, data) => {
  if (typeof localStorage === "undefined") {
    return
  }
  localStorage.setItem(id, JSON.stringify(data))
}

export default useCreateMainDoc
