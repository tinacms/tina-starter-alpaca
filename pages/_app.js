import React from "react"
import App from "next/app"
import { TinaProvider, TinaCMS } from "tinacms"
import { GitClient, GitMediaStore } from "@tinacms/git-client"
import { Normalize } from "styled-normalize"
import { ThemeProvider } from "styled-components"
import theme from "../utils/theme"

import "./app.css"

class MyApp extends App {
  constructor() {
    super()
    this.cms = new TinaCMS({
      sidebar: {
        hidden: process.env.NODE_ENV === "production",
      },
    })
    const client = new GitClient("http://localhost:3000/___tina")
    this.cms.registerApi("git", client)
    this.cms.media.store = new GitMediaStore(client)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <TinaProvider cms={this.cms}>
        <Normalize />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </TinaProvider>
    )
  }
}

export default MyApp
