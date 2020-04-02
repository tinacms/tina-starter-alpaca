import { node, array } from "prop-types"

import { useCreateMainDoc } from "@hooks"

import TopBar from "@components/topbar"
import SideNav from "@components/side-nav"

import { LayoutStyled, LayoutBodyStyled } from "./styles"

const Layout = ({ children, allDocs }) => {
  useCreateMainDoc()

  return (
    <LayoutStyled>
      <TopBar />
      <LayoutBodyStyled>
        <SideNav allDocs={allDocs} />
        {children}
      </LayoutBodyStyled>
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: node,
  allDocs: array,
}

Layout.defaultProps = {
  allDocs: [],
}

export default Layout
