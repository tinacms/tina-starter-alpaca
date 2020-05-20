import { useState } from "react"
import { array, string } from "prop-types"

import NavItem from "./nav-item"

import { SideNavStyled, H3Styled } from "./styles"

const SideNav = ({ allNestedDocs, currentSlug, groupIn }) => {
  const [showDocs, setShowDocs] = useState(false)
  const currentKey = currentSlug[0]

  return (
    <SideNavStyled>
      <H3Styled onClick={() => setShowDocs(!showDocs)} active={showDocs}>
        <i className="icon-arrow_right" />
        Documentation
      </H3Styled>
      <div className={`sideNavDocsList ${showDocs && "active"}`}>
        {allNestedDocs &&
          allNestedDocs.length > 0 &&
          allNestedDocs.map((doc) => (
            <NavItem
              itemData={doc}
              key={doc.slug}
              active={currentKey === doc.slug.split("/")[0]}
              currentSlug={currentSlug}
              groupIn={groupIn}
            />
          ))}
      </div>
    </SideNavStyled>
  )
}

SideNav.propTypes = {
  allNestedDocs: array,
  currentSlug: array,
  groupIn: string,
}

export default SideNav
