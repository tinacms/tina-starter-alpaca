import styled, { css } from "styled-components"

export const PostNavigationStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 48px 0;
  ${({ existPrev }) =>
    existPrev &&
    css`
      justify-content: space-between;
    `}
  @media all and (min-width: 768px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`

export const PaginationLink = styled.a`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
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
