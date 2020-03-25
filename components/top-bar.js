import Link from 'next/link'

// Refactor when designs are complete
import styles from './_temp-styles.module.css'

const TopBar = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Logo</a>
      </Link>
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
    </header>
  )
}

export default TopBar
