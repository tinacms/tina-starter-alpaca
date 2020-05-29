import { getGithubPreviewProps, parseJson } from "next-tinacms-github"

export default async (preview, previewData) => {
  if (preview) {
    const styleFormsProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/styles.json",
      parse: parseJson,
    })

    return {
      styleFile: styleFormsProps.props.file,
    }
  }

  return {
    styleFile: {
      data: (await import("../content/styles.json")).default,
      fileRelativePath: "content/styles.json",
    },
  }
}
