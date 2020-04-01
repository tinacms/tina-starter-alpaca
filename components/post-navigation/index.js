import Link from "next/link"
import { array, shape } from "prop-types"

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

  return (
    <PostNavigationStyled existPrev={Boolean(prevPage)}>
      {prevPage && renderButton(prevPage, "Previous:")}
      {nextPage && renderButton(nextPage, "Next:")}
    </PostNavigationStyled>
  )
}

PostNavigation.propTypes = {
  allDocs: array,
  router: shape(),
}

export default PostNavigation
