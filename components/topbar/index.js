import Link from "next/link"
import { theme } from "@utils"

import { TopBarStyled, LogoWrapperStyled, NavWrapperStyled, NavBarLink } from "./styles"

const TopBar = () => {
  return (
    <TopBarStyled>
      <LogoWrapperStyled>
        <Link href="/" passHref>
          <NavBarLink>{theme.logo}</NavBarLink>
        </Link>
      </LogoWrapperStyled>
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

export default TopBar
