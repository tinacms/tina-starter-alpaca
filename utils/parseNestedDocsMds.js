export default (key, list) => {
  const keySplitted = key.split('/')
  const listCopy = [...list]
  if (keySplitted.length > 2) {
    const foundIndex = listCopy.findIndex(item => item.key === keySplitted[1]);
    if (foundIndex !== -1) {
      listCopy[foundIndex].children.push({
        key,
        slug: `${keySplitted[1]}/${parseRawSlug(keySplitted[2])}`,
        name: parseRawSlug(keySplitted[2]),
      })
    } else {
      listCopy.push({
        key: keySplitted[1],
        slug: `${keySplitted[1]}/index`,
        name: keySplitted[1],
        type: 'group',
        children: [
          {
            key,
            slug: `${keySplitted[1]}/${parseRawSlug(keySplitted[2])}`,
            name: parseRawSlug(keySplitted[2]),
          }
        ],
      })
    }
  } else {
    listCopy.push({
      key,
      slug: parseRawSlug(key),
      name: parseRawSlug(key),
      type: 'solo',
    })
  }
  return listCopy
}

const parseRawSlug = rawSlug =>
  rawSlug
    .replace(/^.*[\\\/]/, '')
    .split('.')
    .slice(0, -1)
    .join('.')
