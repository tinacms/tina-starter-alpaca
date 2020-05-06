import { node, bool } from "prop-types"

import { useCreateMainDoc } from "@hooks"

import TopBar from "@components/topbar"
import Footer from "@components/footer"

import { LayoutStyled, LayoutBodyStyled } from "./styles"

const Layout = ({ children, showDocsSearcher, splitView, preview }) => {
  useCreateMainDoc()

  return (
    <LayoutStyled>
      <TopBar showDocsSearcher={showDocsSearcher} />
      <LayoutBodyStyled splitView={splitView}>{children}</LayoutBodyStyled>
      <Footer preview={preview} />
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: node,
  showDocsSearcher: bool,
  splitView: bool,
}

Layout.defaultProps = {
  showDocsSearcher: false,
  splitView: false,
}

export default Layout
