import Link from "next/link"

import { FooterWrapper, FooterLink, EditWithTinaButton } from "./styles"

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <section className="linksWrapper">
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
        </section>
        <EditWithTinaButton href="#">
          <i className="icon-edit" />
          Edit this page with TinaCMS
        </EditWithTinaButton>
      </div>
    </FooterWrapper>
  )
}

export default Footer
