import Link from "next/link"
import { FooterWrapper, FooterLink, EditWithTinaButton } from "./styles"
import { useCMS } from "tinacms"

const Footer = ({ preview }) => {
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
          <Link href="/docs" passHref>
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

        <EditLink />
      </div>
    </FooterWrapper>
  )
}
export const EditLink = () => {
  const cms = useCMS()
  return (
    <EditWithTinaButton onClick={() => cms.toggle()}>
      <i className="icon-edit" />
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site With TinaCMS"}
    </EditWithTinaButton>
  )
}
export default Footer
