import { useLocalMarkdownForm } from "next-tinacms-markdown"

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

  const [post] = useLocalMarkdownForm(markdownFile, formOptions)

  return [post]
}

export default useFormEditDocs
