import React from "react"

import TopBar from './topbar'
import Footer from './footer'

export default function layout({ children }) {
  return (
    <main>
      <TopBar />
      <div className="body">
        {children}
      </div>
      <Footer />
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: Roboto, system-ui, sans-serif;
          max
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
        .body {
          min-height: calc(100vh - 160px)
        }
      `}</style>
    </main>
  )
}
