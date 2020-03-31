import { useCMS, usePlugins } from "tinacms"
import { useRouter } from "next/router"

import { toMarkdownString } from "@utils"

import TopBar from "@components/topbar"
import SideNav from "@components/side-nav"

import styles from "./styles.module.scss"

const Layout = ({ children, allDocs }) => {
  const router = useRouter()
  const cms = useCMS()
  usePlugins([
    {
      __type: "content-creator",
      name: "Create Main Doc Page",
      fields: [
        {
          name: "slug",
          label: "Slug",
          component: "text",
          required: true,
        },
        {
          name: "title",
          label: "Title",
          component: "text",
          required: true,
        },
      ],
      onSubmit: ({ slug, title }) => {
        return cms.api.git
          .writeToDisk({
            fileRelativePath: `docs/${slug}/index.md`,
            content: toMarkdownString({
              fileRelativePath: `docs/${slug}/index.md`,
              rawFrontmatter: {
                title,
              },
            }),
          })
          .then(() => setTimeout(() => router.push(`/docs/${slug}/index`), 1500))
      },
    },
  ])

  return (
    <main className={styles.layout}>
      <TopBar />
      <div className={styles.layout__body}>
        <SideNav allDocs={allDocs} />
        <div>{children}</div>
      </div>
    </main>
  )
}

Layout.defaultProps = {
  allDocs: [],
}

export default Layout
