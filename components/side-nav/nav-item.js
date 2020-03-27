import Link from 'next/link'

import styles from './styles.module.scss'

const NavItem = ({
  itemData: { slug, type, name, children },
}) => {
  return (
    <div>
      <Link href={`/docs/${slug}`}>
        <a>{name}</a>
      </Link>
      {type === 'group' && (
        <div className={styles.navGroup}>
          {type === 'group' && children.map(item => (
            <NavItem itemData={item} key={item.slug} />
          ))}
        </div>
      )}
    </div>
  )
}

export default NavItem
