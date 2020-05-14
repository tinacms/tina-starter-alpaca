import Link from "next/link"
import { useGithubEditing, GithubClient, TinacmsGithubProvider } from "react-tinacms-github"
import { FooterWrapper, FooterLink, EditWithTinaButton } from "./styles"

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
          <Link href="/docs/[...slug]" as="/docs/getting-started/TOP" passHref>
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

        <EditLink editMode={preview} />
      </div>
    </FooterWrapper>
  )
}
export const EditLink = ({ editMode }) => {
  const github = useGithubEditing()

  return (
    <EditWithTinaButton onClick={editMode ? github.exitEditMode : github.enterEditMode}>
      <i className="icon-edit" />
      {editMode ? "Exit Edit Mode" : "Edit This Site With TinaCMS"}
    </EditWithTinaButton>
  )
}
export default Footer
