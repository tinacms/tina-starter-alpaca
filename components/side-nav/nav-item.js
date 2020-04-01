import { shape } from "prop-types"
import Link from "next/link"

import { NavItemLink, NavGroup } from "./styles"

const NavItem = ({ itemData: { slug, children, title, type } }) => {
  return (
    <div>
      {type === "link" && (
        <Link href={`/docs/${slug}`} passHref>
          <NavItemLink>{title}</NavItemLink>
        </Link>
      )}
      {type === "group" && <a href="#">{title}</a>}

      {children && (
        <NavGroup>
          {children.map((item, index) => (
            <NavItem itemData={item} key={index} />
          ))}
        </NavGroup>
      )}
    </div>
  )
}

NavItem.propTypes = {
  itemData: shape(),
}

export default NavItem
