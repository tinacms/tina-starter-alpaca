import { node, bool } from "prop-types"
import { InlineForm } from "react-tinacms-inline"
import { useGithubToolbarPlugins } from "react-tinacms-github"

import TopBar from "@components/topbar"
import Footer from "@components/footer"

import { LayoutStyled, LayoutBodyStyled } from "./styles"

const Layout = ({ children, showDocsSearcher, splitView, preview, theme }) => {
  useGithubToolbarPlugins()

  return (
    <LayoutStyled>
      <TopBar showDocsSearcher={showDocsSearcher} theme={theme} />
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
