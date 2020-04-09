import styled, { css } from "styled-components"

export const PostNavigationStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 48px 20px;
  ${({ existPrev }) =>
    existPrev &&
    css`
      justify-content: space-between;
    `}
`

export const PaginationLink = styled.a`
  font-size: 16px;
  color: #0071f0;
  text-decoration: none;
  .icon-arrow_right {
    margin-left: 10px;
    position: relative;
    top: 2px;
  }
  .icon-arrow_left {
    margin-right: 10px;
    position: relative;
    top: 2px;
  }
  &:hover {
    span {
      text-decoration: underline;
    }
  }
`
