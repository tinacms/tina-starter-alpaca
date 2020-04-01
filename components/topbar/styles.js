import styled from "styled-components"

export const TopBarStyled = styled.div`
  margin: 0 auto;
  align-items: center;
  @media all and (min-width: 768px) {
    height: 80px;
    display: flex;
    justify-content: space-between;
  }
`

export const LogoWrapperStyled = styled.div`
  height: 57px;
  display: flex;
  align-items: center;
`

export const NavWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NavBarLink = styled.a`
  @media all and (min-width: 768px) {
    margin-right: 3rem;
  }
`
