import { useMarkdownForm } from "next-tinacms-markdown"
import { useGithubMarkdownForm } from "react-tinacms-github"

const useFormEditDocs = (markdownFile) => {
  const formOptions = {
    label: "Edit doc page",
    fields: [
      {
        name: "frontmatter.title",
        label: "Title",
        component: "text",
      },
      {
        name: "markdownBody",
        label: "Doc Body",
        component: "markdown",
      },
    ],
  }

  const [data, post] = useGithubMarkdownForm(markdownFile, formOptions)
  return [data, post]
}

export default useFormEditDocs
