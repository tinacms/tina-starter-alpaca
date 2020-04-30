import { useState } from "react"
import { shape, bool, array, string } from "prop-types"
import Link from "next/link"

import { NavItemLink, NavGroup } from "./styles"

const NavItem = ({ itemData: { slug, children, title, type }, active, currentSlug, groupIn }) => {
  const [showChildrens, setShowChildrens] = useState(type === "group")
  const currentSlugKey = currentSlug.join("/")

  /* Methods */
  const handleToggleGroup = (ev) => {
    ev.preventDefault()
    setShowChildrens(!showChildrens)
  }

  const renderLink = (type) => {
    const childrenLength = (children && children.length) || 0
    let icon = ""
    if (childrenLength === 0) {
      icon = <i className="dot" />
    } else {
      icon = <i className="icon-arrow_right" />
    }

    return (
      <NavItemLink
        active={active || groupIn === title}
        show={showChildrens}
        {...(type === "group" && {
          href: "#",
          onClick: handleToggleGroup,
        })}
      >
        {icon}
        {title}
      </NavItemLink>
    )
  }

  return (
    <div>
      {type === "link" && (
        <Link href={`/docs/[...slug]`} as={`/docs/${slug}`} passHref>
          {renderLink()}
        </Link>
      )}
      {type === "group" && renderLink("group")}

      {children && (
        <NavGroup active={active || showChildrens}>
          {children.map((item, index) => (
            <NavItem
              itemData={item}
              key={index}
              active={currentSlugKey === item.slug}
              currentSlug={currentSlug}
              groupIn={groupIn}
            />
          ))}
        </NavGroup>
      )}
    </div>
  )
}

NavItem.propTypes = {
  active: bool,
  itemData: shape(),
  currentSlug: array,
  groupIn: string,
}

NavItem.defaultProps = {
  active: false,
}

export default NavItem
