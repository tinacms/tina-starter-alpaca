import { useCMS, usePlugins } from 'tinacms'
import { toMarkdownString } from '@utils'

import TopBar from '@components/topbar'
import SideNav from '@components/side-nav'

import styles from './styles.module.scss'

const Layout = ({ children, allDocs }) => {
  const cms = useCMS()
  usePlugins([
    {
      __type: 'content-creator',
      name: 'Create Doc Page',
      user: 'LiamKlyneker',
      fields: [
        {
          name: 'title',
          label: 'Title',
          component: 'text',
        },
      ],
      onSubmit: ({ title }) => {
        return cms.api.git.onChange({
          fileRelativePath: `docs/${title}.md`,
          content: toMarkdownString({
            fileRelativePath: `docs/${title}.md`,
            rawFrontmatter: {
              title,
            },
          }),
        })
      },
    },
  ])

  return (
    <main className={styles.layout}>
      <TopBar />
      <div className={styles.layout__body}>
        <SideNav allDocs={allDocs} />
        <div>
          {children}
        </div>
      </div>
    </main>
  )
}

Layout.defaultProps = {
  allDocs: [],
}

export default Layout