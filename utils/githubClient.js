import { GithubClient } from "react-tinacms-github"

class GithubError extends Error {
  status
  constructor(message, status) {
    super(message)
    this.message = message
    this.status = status
  }
}

export class myGitHubClient extends GithubClient {
  async fetchFile(filePath, sha) {
    const repo = this.workingRepoFullName
    const branch = this.branchName
    const request = await this.req({
      url: `https://api.github.com/repos/${repo}/contents/${filePath}`,
      method: "GET",
      data: {
        sha,
        branch: branch,
      },
    })

    // return the content of the request and allso the decoded content
    return {
      ...request,
      // decode using base64 decoding (https://developer.mozilla.org/en-US/docs/Glossary/Base64)
      decodedContent: atob(request.content || ""),
    }
  }

  // From tinacms github client but private methods
  async req(data) {
    const response = await this.proxyRequest(data)
    return this.getGithubResponse(response)
  }

  async getGithubResponse(response) {
    const data = await response.json()
    //2xx status codes
    if (response.status.toString()[0] == "2") return data

    throw new GithubError(response.statusText, response.status)
  }
  proxyRequest(data) {
    return fetch(this.proxy, {
      method: "POST",
      body: JSON.stringify(data),
    })
  }
}
