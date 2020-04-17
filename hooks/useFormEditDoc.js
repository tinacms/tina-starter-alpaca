import { useMarkdownForm } from "next-tinacms-markdown"

const useFormEditDocs = (markdownFile) => {
  const formOptions = {
    fields: [
      {
        name: "frontmatter.title",
        label: "Title",
        component: "text",
      },
      {
        name: "markdownBody",
        label: "Blog Body",
        component: "markdown",
      },
    ],
  }

  const [data, post] = useMarkdownForm(markdownFile, formOptions)

  return [data, post]
}

export default useFormEditDocs
