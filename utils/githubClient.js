import { GithubClient } from "react-tinacms-github"

class GithubError extends Error {
  status
  constructor(message, status) {
    super(message)
    this.message = message
    this.status = status
  }
}

export class AlpacaGitHubClient extends GithubClient {
  // prehaps at some point this functionality should be moved to the GitHub cleint in tinaCMS
  async fetchFile(filePath, decoded = true) {
    const repo = this.workingRepoFullName
    const branch = this.branchName
    const request = await this.req({
      url: `https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`,
      method: "GET",
    })

    // decode using base64 decoding (https://developer.mozilla.org/en-US/docs/Glossary/Base64)
    request.content = decoded ? atob(request.content || "") : request.content
    return request
  }
}
