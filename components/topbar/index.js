import { useState } from "react"
import { bool } from "prop-types"
import Link from "next/link"

import GitHubLogo from "../../public/icons/github.svg"

import Search from "@components/search"

// import { theme } from "@utils"

import {
  TopBarStyled,
  LogoWrapperStyled,
  SearchWrapperStyled,
  NavWrapperStyled,
  NavBarLink,
  LogoImg,
  IconButton,
} from "./styles"

const TopBar = ({ showDocsSearcher, theme, searchIndex, searchText }) => {
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
            <LogoImg alt={theme.siteName} src={`/${theme.logo}`} />
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
              searchIndex={searchIndex}
              searchText={searchText}
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
        <Link href="/docs" passHref>
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
          <GitHubLogo width="32" height="32" />
        </NavBarLink>
      </NavWrapperStyled>
    </TopBarStyled>
  )
}

TopBar.propTypes = {
  showDocsSearcher: bool,
}

export default TopBar
