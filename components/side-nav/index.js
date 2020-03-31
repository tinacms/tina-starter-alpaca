import { array } from "prop-types"

import NavItem from "./nav-item"

import { SideNavStyled } from "./styles"

const SideNav = ({ allDocs }) => {
  return (
    <SideNavStyled>
      <p>
        <strong>DOCS</strong>
      </p>
      {allDocs &&
        allDocs.length > 0 &&
        allDocs.map((doc) => <NavItem itemData={doc} key={doc.slug} />)}
    </SideNavStyled>
  )
}

SideNav.propTypes = {
  allDocs: array,
}

export default SideNav
