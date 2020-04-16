// eslint-disable-next-line no-undef
const toc = require("markdown-toc")

export default function generateTOC(markdown) {
  return toc(markdown).content
}
