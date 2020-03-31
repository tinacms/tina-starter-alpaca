import Link from "next/link"
import styles from "./styles.module.scss"
import theme from "../../utils/theme"

const TopBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoWrapper}>
        <Link href="/">
          <a>{theme.logo}</a>
        </Link>
      </div>
      <div className={styles.header__navWrapper}>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/features">
          <a>Features</a>
        </Link>
        <Link href="/docs/getting-started/index">
          <a>Docs</a>
        </Link>
        <a href="https://github.com/tinacms/tinacms" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </header>
  )
}

export default TopBar
