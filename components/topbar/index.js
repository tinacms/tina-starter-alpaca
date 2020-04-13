import { useState } from "react"
import { bool } from "prop-types"
import Link from "next/link"

import Logo from "../../public/logo_ipsum.png"
import GitHubLogo from "../../public/icons/github.png"

import Search from "@components/search"

import {
  TopBarStyled,
  LogoWrapperStyled,
  SearchWrapperStyled,
  NavWrapperStyled,
  NavBarLink,
  LogoImg,
  IconButton,
} from "./styles"

const TopBar = ({ showDocsSearcher }) => {
  /* States */
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  /* Methods */
  const handleToggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)

  const handleToggleSearchInput = () => setShowMobileSearch(!showMobileSearch)

  return (
    <TopBarStyled>
      <LogoWrapperStyled>
        <Link href="/">
          <a>
            <LogoImg src={Logo} />
          </a>
        </Link>
        <div>
          {showDocsSearcher && (
            <IconButton onClick={handleToggleSearchInput}>
              <i className="icon-search" />
            </IconButton>
          )}
          <IconButton onClick={handleToggleMobileMenu}>
            {!showMobileMenu ? <i className="icon-menu_icon" /> : <i className="icon-close" />}
          </IconButton>
        </div>
      </LogoWrapperStyled>
      {showDocsSearcher && (
        <SearchWrapperStyled active={showMobileSearch}>
          <div>
            <Search
              handleToggleSearchInput={handleToggleSearchInput}
              showMobileSearch={showMobileSearch}
            />
          </div>
        </SearchWrapperStyled>
      )}
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
