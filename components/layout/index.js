import { node, bool } from "prop-types"

import { useCreateMainDoc } from "@hooks"

import TopBar from "@components/topbar"
import Footer from "@components/footer"

import { GlobalStyles, LayoutStyled, LayoutBodyStyled } from "./styles"

const Layout = ({ children, showDocsSearcher, splitView }) => {
  useCreateMainDoc()

  return (
    <LayoutStyled>
      <GlobalStyles />
      <TopBar showDocsSearcher={showDocsSearcher} />
      <LayoutBodyStyled splitView={splitView}>{children}</LayoutBodyStyled>
      <Footer />
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
