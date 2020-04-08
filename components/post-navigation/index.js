import Link from "next/link"
import { useRouter } from "next/router"
import { array } from "prop-types"

import { flatDocs } from "@utils"

import { PostNavigationStyled } from "./styles"

const PostNavigation = ({ allNestedDocs }) => {
  const router = useRouter()
  const { query } = router
  const allDocsFlatted = flatDocs(allNestedDocs)
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
  allNestedDocs: array,
}

export default PostNavigation
