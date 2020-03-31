import styled, { css } from "styled-components"

export const PostNavigationStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  ${({ existPrev }) =>
    existPrev &&
    css`
      justify-content: space-between;
    `}
`
