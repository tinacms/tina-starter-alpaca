import { array, number } from "prop-types"
const slugify = require("slugify")
import styled from "styled-components"

const Headings = ({ children, level }) => {
  const Heading = `h${level}`
  const value = children
    .map((child) => child.props.value || child.props.children[0].props.value)
    .join("")
  const slug = slugify(value, { lower: true })
  return (
    <Heading id={slug}>
      <HeadingLink href={`#${slug}`} aria-label={value} className="headingLink">
        {children}
      </HeadingLink>
    </Heading>
  )
}

Headings.propTypes = {
  children: array,
  level: number,
}

export default Headings

const HeadingLink = styled.a`
  &.headingLink {
    line-height: 36px;
    color: #333333;
    font-weight: 700;
    margin: 0;
    margin-bottom: 12px;

    &:hover {
      text-decoration: none;
    }
  }
`
