import Link from 'next/link'

import styles from './styles.module.scss'

const NavItem = ({
  itemData: { slug, children, title, type },
}) => {
  return (
    <div>
      {type === 'link' && (
        <Link href={`/docs/${slug}`}>
          <a>{title}</a>
        </Link>
      )}
      {type === 'group' && <a href="#">{title}</a>}

      {children && (
        <div className={styles.navGroup}>
          {children.map(item => (
            <NavItem itemData={item} key={item.slug} />
          ))}
        </div>
      )}
    </div>
  )
}

export default NavItem
