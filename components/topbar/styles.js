import styled, { css } from "styled-components"

export const TopBarStyled = styled.header`
  background-color: #0071f0;
  padding: 0 24px;
  justify-content: space-between;
  @media all and (min-width: 768px) {
    display: flex;
  }
`

export const LogoWrapperStyled = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media all and (min-width: 768px) {
    div {
      display: none;
    }
  }
`

export const LogoImg = styled.img`
  max-width: 161px;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: 0;
  color: white;
  outline: 0;
  font-size: 18px;
  padding-top: 2px;
`

export const NavWrapperStyled = styled.div`
  position: fixed;
  z-index: 999;
  height: calc(100vh - 80px);
  background-color: #0071f0;
  left: 0;
  top: 80px;
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ showMobileMenu }) =>
    showMobileMenu &&
    css`
      display: flex;
    `}
  @media all and (min-width: 768px) {
    position: initial;
    display: flex;
    height: initial;
    flex-direction: row;
    justify-content: flex-end;
  }
`

export const NavBarLink = styled.a`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 48px;
  color: white;
  text-decoration: none;
  width: 100%;
  text-align: center;
  @media all and (min-width: 768px) {
    margin-right: 3rem;
    font-size: 16px;
    color: #cce3fe;
    margin-bottom: 0;
    width: initial;
  }
  img {
    max-width: 32px;
  }
  &:last-child {
    display: none;
  }
  @media all and (min-width: 768px) {
    &:nth-last-child(2) {
      display: none;
    }
    &:last-child {
      display: block;
    }
  }
`
