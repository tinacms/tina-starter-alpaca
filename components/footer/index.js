import Link from "next/link"
// import styles from './styles.module.scss'
import IconEditSVG from "../../public/icons/edit.svg"
import { FooterWrapper, FooterLink, EditWithTinaButton } from "./styles"

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <Link href="/blog" passHref>
          <FooterLink>Blog</FooterLink>
        </Link>
        <Link href="/features" passHref>
          <FooterLink>Features</FooterLink>
        </Link>
        <Link href="/docs/getting-started/index" passHref>
          <FooterLink>Docs</FooterLink>
        </Link>
        <FooterLink
          href="https://github.com/tinacms/tinacms"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </FooterLink>
      </div>
      <EditWithTinaButton href="#">
        <IconEditSVG />
        Edit this page with TinaCMS
      </EditWithTinaButton>
    </FooterWrapper>
  )
}

export default Footer
