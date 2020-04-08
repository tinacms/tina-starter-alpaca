import { bool } from "prop-types"
import Link from "next/link"
import { theme } from "@utils"

import Search from "@components/search"

import { TopBarStyled, LogoWrapperStyled, NavWrapperStyled, NavBarLink } from "./styles"

const TopBar = ({ showDocsSearcher }) => {
  return (
    <TopBarStyled>
      <LogoWrapperStyled>
        <Link href="/" passHref>
          <NavBarLink>{theme.logo}</NavBarLink>
        </Link>
      </LogoWrapperStyled>
      {showDocsSearcher && <Search />}
      <NavWrapperStyled>
        <Link href="/blog" passHref>
          <NavBarLink>Blog</NavBarLink>
        </Link>
        <Link href="/features" passHref>
          <NavBarLink>Features</NavBarLink>
        </Link>
        <Link href="/docs/getting-started/index" passHref>
          <NavBarLink>Docs</NavBarLink>
        </Link>
        <NavBarLink
          href="https://github.com/tinacms/tinacms"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </NavBarLink>
      </NavWrapperStyled>
    </TopBarStyled>
  )
}

TopBar.propTypes = {
  showDocsSearcher: bool,
}

export default TopBar
