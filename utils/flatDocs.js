export default (docs) =>
  docs.reduce((newArray, item) => [...newArray, ...[item], ...flatChilds(item.children)], [])

const flatChilds = (docs) =>
  docs.reduce(
    (a, b) => a.concat(b.children && b.children.length > 0 ? flatChilds(b.children) : b),
    []
  )
