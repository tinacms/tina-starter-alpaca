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

  return useGithubMarkdownForm(markdownFile, formOptions)
}

export default useFormEditDocs
