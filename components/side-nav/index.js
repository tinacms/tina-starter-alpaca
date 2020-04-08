import { array } from "prop-types"

import NavItem from "./nav-item"

import { SideNavStyled } from "./styles"

const SideNav = ({ allNestedDocs }) => {
  return (
    <SideNavStyled>
      <p>
        <strong>DOCS</strong>
      </p>
      {allNestedDocs &&
        allNestedDocs.length > 0 &&
        allNestedDocs.map((doc) => <NavItem itemData={doc} key={doc.slug} />)}
    </SideNavStyled>
  )
}

SideNav.propTypes = {
  allNestedDocs: array,
}

export default SideNav
