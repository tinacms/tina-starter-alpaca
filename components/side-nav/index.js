import NavItem from "./nav-item"

import styles from "./styles.module.scss"

const SideNav = ({ allDocs }) => {
  return (
    <nav className={styles.sideNav}>
      <p>
        <strong>DOCS</strong>
      </p>
      {allDocs &&
        allDocs.length > 0 &&
        allDocs.map((doc) => <NavItem itemData={doc} key={doc.slug} />)}
    </nav>
  )
}

export default SideNav
