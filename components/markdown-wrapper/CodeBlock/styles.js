const Codetheme = {
  'code[class*="language-"]': {
    color: "white",
    background: "none",
    fontFamily: "Source Code Pro, Consolas, monospace",
    textAlign: "left",
    padding: 0,
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "black",
    background: "#333333",
    fontFamily: "Source Code Pro, Consolas, monospace",
    fontSize: "14px",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "24px",
    margin: "10px 0 32px 0",
    overflow: "auto",
  },
  'pre[class*="language-"]::-moz-selection': {
    background: "#b3d4fc",
  },
  'pre[class*="language-"] ::-moz-selection': {
    background: "#b3d4fc",
  },
  'code[class*="language-"]::-moz-selection': {
    background: "#b3d4fc",
  },
  'code[class*="language-"] ::-moz-selection': {
    background: "#b3d4fc",
  },
  'pre[class*="language-"]::selection': {
    background: "#b3d4fc",
  },
  'pre[class*="language-"] ::selection': {
    background: "#b3d4fc",
  },
  'code[class*="language-"]::selection': {
    background: "#b3d4fc",
  },
  'code[class*="language-"] ::selection': {
    background: "#b3d4fc",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#f5f2f0",
    padding: ".1em",
    borderRadius: ".3em",
    whiteSpace: "normal",
  },
  comment: {
    color: "slategray",
  },
  prolog: {
    color: "slategray",
  },
  doctype: {
    color: "slategray",
  },
  cdata: {
    color: "slategray",
  },
  punctuation: {
    color: "#999",
  },
  ".namespace": {
    Opacity: ".7",
  },
  property: {
    color: "#77b1fa",
  },
  tag: {
    color: "#77b1fa",
  },
  boolean: {
    color: "#77b1fa",
  },
  number: {
    color: "#77b1fa",
  },
  constant: {
    color: "#77b1fa",
  },
  symbol: {
    color: "#77b1fa",
  },
  deleted: {
    color: "#77b1fa",
  },
  selector: {
    color: "#a8ff60",
  },
  "attr-name": {
    color: "#a8ff60",
  },
  string: {
    color: "#a8ff60",
  },
  char: {
    color: "#a8ff60",
  },
  builtin: {
    color: "#a8ff60",
  },
  inserted: {
    color: "#a8ff60",
  },
  operator: {
    color: "#fff",
  },
  entity: {
    color: "#fff",

    cursor: "help",
  },
  url: {
    color: "#fff",
  },
  ".language-css .token.string": {
    color: "#fff",
  },
  ".style .token.string": {
    color: "#fff",
  },
  atrule: {
    color: "#77b1fa",
  },
  "attr-value": {
    color: "#77b1fa",
  },
  keyword: {
    color: "#77b1fa",
  },
  function: {
    color: "#ffd1c5",
  },
  "class-name": {
    color: "#77b1fa",
  },
  regex: {
    color: "#e90",
  },
  important: {
    color: "#e90",
    fontWeight: "bold",
  },
  variable: {
    color: "#e90",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
}

export default Codetheme
