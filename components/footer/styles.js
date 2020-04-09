import styled from "styled-components"

export const FooterWrapper = styled.footer`
  max-width: calc(762px + 40px);
  margin: 0 auto;
  padding: 20px;
  div {
    padding-top: 32px;
    border-top: 1px solid #d8d8d8;
  }
  @media all and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 48px 20px;
    div {
      padding-top: 0;
      border-top: 0;
      display: flex;
    }
  }
`

export const FooterLink = styled.a`
  font-size: 12px;
  text-decoration: none;
  display: block;
  text-align: center;
  margin-bottom: 24px;
  color: #333300;
  @media all and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 40px;
  }
  &:hover {
    text-decoration: underline;
  }
`

export const EditWithTinaButton = styled.a`
  box-sizing: border-box;
  border: 1px solid #cce3fe;
  background-color: #eff6fe;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  color: #333333;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  max-width: 254px;
  margin: 0 auto;
  svg {
    margin-right: 8px;
  }
  &:hover {
    border-color: #77b1fa;
  }
`
