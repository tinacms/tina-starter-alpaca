import toc from "markdown-toc"

export default function generateTOC(markdown) {
  return markdown.length > 0 ? toc(markdown).content : ""
}
