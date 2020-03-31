import Link from "next/link"

import { flatDocs } from "@utils"

import { PostNavigationStyled } from "./styles"

const PostNavigation = ({ allDocs, router }) => {
  const { query } = router
  const allDocsFlatted = flatDocs(allDocs)
  const foundIndex = allDocsFlatted.findIndex((doc) => doc.slug === query.slug.join("/"))
  const prevPage = allDocsFlatted[foundIndex - 1]
  const nextPage = allDocsFlatted[foundIndex + 1]

  /* Methods */
  const renderButton = (pageObject, label) => (
    <Link href={`/docs/${pageObject.slug}`}>
      <a>
        {label} {pageObject.title}
      </a>
    </Link>
  )

  console.log(Boolean(prevPage), prevPage)
  return (
    <PostNavigationStyled existPrev={Boolean(prevPage)}>
      {prevPage && renderButton(prevPage, "Previous:")}
      {nextPage && renderButton(nextPage, "Next:")}
    </PostNavigationStyled>
  )
}

export default PostNavigation
