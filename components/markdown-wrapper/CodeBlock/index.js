import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import Codetheme from "./styles"

const CodeBlock = ({ value }) => {
  return (
    <SyntaxHighlighter language="jsx" style={Codetheme}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
