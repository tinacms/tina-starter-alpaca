import Link from "next/link"

import { flatDocs } from "@utils"

import styles from "./styles.module.scss"

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
    <div className={styles.postNavigation}>
      <div>{prevPage && renderButton(prevPage, "Previous:")}</div>
      <div>{nextPage && renderButton(nextPage, "Next:")}</div>
    </div>
  )
}

export default PostNavigation
