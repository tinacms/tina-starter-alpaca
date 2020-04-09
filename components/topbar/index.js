import { useState } from "react"
import { bool } from "prop-types"
import Link from "next/link"

import Logo from "../../public/logo_ipsum.png"
import GitHubLogo from "../../public/icons/github.png"

// import Search from "@components/search"

import {
  TopBarStyled,
  LogoWrapperStyled,
  NavWrapperStyled,
  NavBarLink,
  LogoImg,
  IconButton,
} from "./styles"

const TopBar = () => {
  /* States */
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  /* Methods */
  const handleToggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)

  return (
    <TopBarStyled>
      <LogoWrapperStyled>
        <Link href="/">
          <a>
            <LogoImg src={Logo} />
          </a>
        </Link>
        <div>
          <IconButton onClick={handleToggleMobileMenu}>
            {!showMobileMenu ? <i className="icon-menu_icon" /> : <i className="icon-close" />}
          </IconButton>
        </div>
      </LogoWrapperStyled>
      {/* {showDocsSearcher && <Search />} */}
      <NavWrapperStyled showMobileMenu={showMobileMenu}>
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
        <NavBarLink
          href="https://github.com/tinacms/tinacms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} />
        </NavBarLink>
      </NavWrapperStyled>
    </TopBarStyled>
  )
}

TopBar.propTypes = {
  showDocsSearcher: bool,
}

export default TopBar
