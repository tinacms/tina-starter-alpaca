import Link from 'next/link'

import styles from './styles.module.scss'

const TopBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoWrapper}>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
      <div className={styles.header__navWrapper}>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/features">
          <a>Features</a>
        </Link>
        <Link href="/docs">
          <a>Docs</a>
        </Link>
        <a href="https://github.com/tinacms/tinacms" target="_blank">GitHub</a>
      </div>
    </header>
  )
}

export default TopBar
