import { useCMS, usePlugins } from "tinacms"
import { useRouter } from "next/router"
import {
  getGithubPreviewProps,
  parseMarkdown,
  parseJson,
  getFiles as getGithubFiles,
  getContent,
} from "next-tinacms-github"
import axios from "axios"

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
        // const test = await getContent( this.api.github.workingRepoFullName, this.api.github.baseBranch, 'docs/config.json',.... )
        // console.log(test)
        // TODO Get this file from github not the file system and get its sha1 useing somthing like https://stackoverflow.com/questions/20207594/how-to-find-a-github-file-s-sha-blob
        // proplem is not sure how to get the access token
        // const allNestedDocsRemote = require('../docs/config.json')
        // console.log(allNestedDocsRemote)

        // allNestedDocsRemote.config.push({
        //   "type": "link",
        //   "key": slug,
        //   slug: `${slug}/${TOP}`,
        //   title,
        //   "position": null,
        //   "children": []
        // })
        // console.log(allNestedDocsRemote)
        // JSON.stringify(allNestedDocsRemote)
        // await cms.api.github
        //   .commit(
        //     'docs/config.json',
        //     getCachedFormData('docs/config').sha,
        //     JSON.stringify(allNestedDocsRemote),
        //     'Update from TinaCMS'
        //   )
        //   .then((response) => {
        //     setCachedFormData('docs/config', {
        //       sha: response.content.sha,
        //     })
        //   })

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
