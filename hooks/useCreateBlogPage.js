import { useCMS, usePlugins } from "tinacms"
import { useRouter } from "next/router"
import slugify from "slugify"
import { FORM_ERROR } from "final-form"

import { toMarkdownString, flatDocs, getRandID } from "@utils"
import { removeInvalidChars } from "../utils/removeInvalidChars"

const useCreateBlogPage = (allBlogs) => {
  const router = useRouter()
  const cms = useCMS()
  usePlugins([
    {
      __type: "content-creator",
      name: "Make a new blog post",
      fields: [
        {
          name: "title",
          label: "Title",
          component: "text",
          required: true,
          validate(value, allValues, meta, field) {
            if (!value) {
              return "A title is required"
            }
            if (allBlogs.some((post) => post.fileName === slugify(value, { lower: true }))) {
              return "Sorry the blog title must be unique"
            }
          },
        },
        {
          name: "author",
          label: "Author",
          component: "text",
          required: true,
        },
        {
          name: "date",
          label: "Date",
          component: "date",
          dateFormat: "MMMM DD YYYY",
          timeFormat: false,
          required: true,
        },
        {
          name: "description",
          label: "Description",
          component: "text",
          required: false,
        },
      ],
      onSubmit: async (frontMatter) => {
        const github = cms.api.github
        const slug = removeInvalidChars(slugify(frontMatter.title, { lower: true }))
        const fileRelativePath = `content/blog/${slug}.md`
        frontMatter.date = frontMatter.date || new Date().toString()
        return await github
          .commit(
            fileRelativePath,
            null,
            toMarkdownString({
              fileRelativePath,
              rawFrontmatter: {
                ...frontMatter,
              },
            }),
            "Update from TinaCMS"
          )
          .then((response) => {
            setTimeout(() => router.push(`/blog/${slug}`), 1500)
          })
          .catch((e) => {
            return { [FORM_ERROR]: e }
          })
      },
    },
  ])
}

export default useCreateBlogPage
