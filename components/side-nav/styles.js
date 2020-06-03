import styled, { css } from "styled-components"

export const SideNavStyled = styled.nav`
  border-bottom: 1px solid #d8d8d8;
  .sideNavDocsList {
    display: none;
  }
  .sideNavDocsList.active {
    display: block;
  }
  @media all and (min-width: 768px) {
    flex: 1;
    max-width: 22%;
    margin-right: 10px;
    border-bottom-width: 0;
    .sideNavDocsList {
      display: block;
    }
  }
`

export const NavItemLink = styled.a`
  display: block;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-decoration: none;
  color: #333333;
  position: relative;
  padding-left: 24px;
  i {
    position: absolute;
    font-size: 12px;
    left: 6px;
    top: 5px;
  }
  .dot {
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: #707070;
    top: 9px;
    left: 10px;
  }

  &:hover {
    text-decoration: underline;
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      .dot {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    `}
  ${({ show }) =>
    show &&
    css`
      i {
        transform: rotate(90deg);
      }
    `}
`

export const NavGroup = styled.div`
  margin-left: 1.2rem;
  display: none;
  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
`

export const H3Styled = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  margin: 0;
  padding: 10px 0;
  padding-left: 26px;
  position: relative;
  i {
    font-size: 12px;
    position: absolute;
    top: 22px;
    left: 6px;
    color: ${({ theme }) => theme.colors.primary};
  }
  ${({ active }) =>
    active &&
    css`
      i {
        transform: rotate(90deg);
      }
    `}
  @media all and (min-width: 768px) {
    margin-bottom: 1rem;
    border-bottom-width: 0;
    padding: 0;
    i {
      display: none;
    }
  }
`
