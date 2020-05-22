import { useCMS, usePlugins } from "tinacms"
import { useRouter } from "next/router"
import {
  getGithubPreviewProps,
  parseMarkdown,
  parseJson,
  getFiles as getGithubFiles,
  getContent,
} from "next-tinacms-github"

import { toMarkdownString } from "@utils"

const TOP = "TOP"
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
        const fileRelativePath = `docs/${slug}/${TOP}.md`

        // get json file from github
        const configFile = await cms.api.github.fetchFile("docs/config.json", null)
        const sha = configFile.sha
        const allNestedDocsRemote = JSON.parse(configFile.decodedContent)

        // add the new file to the begining of the array (This will also be the begining of the navigation)
        allNestedDocsRemote.config.unshift({
          type: "link",
          slug: `${slug}/${TOP}`,
          title,
          children: [],
        })
        await cms.api.github
          .commit(
            "docs/config.json",
            sha,
            JSON.stringify(allNestedDocsRemote),
            "Update from TinaCMS"
          )
          .then((response) => {
            setCachedFormData("docs/config", {
              sha: response.content.sha,
            })
          })

        return await cms.api.github
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
            setTimeout(() => router.push(`/docs/${slug}/${TOP}`), 1500)
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
