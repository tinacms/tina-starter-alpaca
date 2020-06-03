import { useGithubAuthRedirect } from "react-tinacms-github"

// Our GitHub app redirects back to this page with auth code
export default function Authorizing() {
  // Let the main app know, that we received an auth code from the GitHub redirect
  useGithubAuthRedirect()

  return <h2>Authorizing with GitHub, please wait...</h2>
}
