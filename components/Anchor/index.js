import styled from "styled-components"

export const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: inherit; /* no underline */
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`
export const PrimaryAnchor = styled(StyledAnchor)`
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    text-decoration: underline;
  }
`
