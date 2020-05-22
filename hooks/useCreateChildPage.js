import { useCMS, usePlugins } from "tinacms"
import { useRouter } from "next/router"

import { toMarkdownString } from "@utils"

const useCreateChildPage = async (allDocs) => {
  const router = useRouter()
  const cms = useCMS()
  const category = router.query.slug[0]
  const parentObject = allDocs.find((item) => item.slug.split("/")[0] === router.query.slug[0])

  // // find all the groups
  const groups = []
  allDocs.forEach((doc) => {
    // if the doc is the the catorgory we are clicking on
    if (doc.slug.startsWith(category)) {
      doc.children.forEach((childDoc) => {
        if (childDoc.type === "group") {
          groups.push(childDoc.title)
        }
      })
    }
  }, [])

  usePlugins([
    {
      __type: "content-creator",
      name: `Create Child Page for ${parentObject?.title || ""}`,
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
          component: "select",
          options: ["No Group", ...groups],
        },
      ],
      onSubmit: async ({ slug, title, groupIn }) => {
        // get confile JSON file from github
        const configFile = await cms.api.github.fetchFile("docs/config.json", null)
        const allNestedDocsRemote = JSON.parse(configFile.decodedContent)
        const category = router.query.slug[0]
        const fileRelativePath = `docs/${router.query.slug[0]}/${slug}.md`
        const sha = configFile.sha

        const defaultItem = {
          type: "link",
          slug: `${category}/${slug}`,
          title,
          children: [],
        }

        // find the current category and add it to it
        allNestedDocsRemote.config.forEach((element) => {
          if (element.slug.toLowerCase().startsWith(category.toLowerCase())) {
            if (groupIn === "No Group") {
              // not adding it to a third level group
              element.children.unshift(defaultItem)
            } else {
              // we are adding it to a third level group
              // find the group
              element.children.forEach((child) => {
                if (child.type === "group" && child.title === groupIn) {
                  // we found the group now add a new child that links to the new doc
                  child.children.unshift(defaultItem)
                }
              })
            }
          }
        })

        // commit new json file to github
        await cms.api.github.commit(
          "docs/config.json",
          sha,
          JSON.stringify(allNestedDocsRemote),
          "Update from TinaCMS"
        )

        return cms.api.github
          .commit(
            fileRelativePath,
            null,
            toMarkdownString({
              fileRelativePath,
              rawFrontmatter: {
                title,
                groupIn: groupIn !== "No group" ? groupIn || "" : "",
              },
            })
          )
          .then(() => {
            // setTimeout(() => router.push(`/docs/${router.query.slug[0]}/${slug}`), 1500)
            window.location.href = `/docs/${router.query.slug[0]}/${slug}`
          })
      },
    },
  ])
}

export default useCreateChildPage
