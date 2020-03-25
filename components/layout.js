import React from "react"

export default function layout({ children }) {
  return (
    <main>
      {children}
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: Roboto, system-ui, sans-serif;
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
      `}</style>
    </main>
  )
}
