import matter from "gray-matter"

export default (context) => {
  const keys = context.keys()
  const values = keys.map(context)
  const data = keys.reduce((newData, key, index) => {
    const document = matter(values[index].default)
    newData = parseNestiness(key, newData, document)
    return newData
  }, [])
  return data
}

const parseNestiness = (key, list, document) => {
  const keySplitted = key.split("/")
  const listCopy = [...list]
  const foundIndex = listCopy.findIndex((item) => item.key === keySplitted[1])
  if (foundIndex !== -1) {
    if (!document.data.groupIn) {
      if (keySplitted[2] !== "index.md") {
        listCopy[foundIndex].children.push(parseChildItem(key, document))
      } else {
        listCopy[foundIndex].title = document.data.title
      }
    } else {
      listCopy[foundIndex].children = parseGroupChildren(
        key,
        listCopy[foundIndex].children,
        document
      )
    }
  } else {
    listCopy.push(parseParentItem(key, document, "link"))
  }
  return listCopy
}

const parseGroupChildren = (key, childrenList, document) => {
  const childrenListCopy = [...childrenList]
  const foundIndex = childrenListCopy.findIndex((item) => item.key === document.data.groupIn)
  if (foundIndex !== -1) {
    childrenListCopy[foundIndex].children.push(parseChildItem(key, document))
  } else {
    childrenListCopy.push(parseParentItem(key, document, "group"))
  }
  return childrenListCopy
}

const parseParentItem = (key, document, type) => {
  const keySplitted = key.split("/")
  return {
    type: type,
    ...(type === "link" && {
      key: keySplitted[1],
      slug: `${keySplitted[1]}/index`,
    }),
    ...(type === "group" && {
      key: document.data.groupIn,
    }),
    title: document.data.title,
    children: [...(keySplitted[2] !== "index.md" ? [parseChildItem(key, document)] : [])],
  }
}

const parseChildItem = (key, document) => {
  const keySplitted = key.split("/")
  return {
    key,
    slug: `${keySplitted[1]}/${parseRawSlug(keySplitted[2])}`,
    type: "link",
    title: document.data.title,
  }
}

const parseRawSlug = (rawSlug) =>
  rawSlug
    .replace(/^.*[\\\/]/, "")
    .split(".")
    .slice(0, -1)
    .join(".")
