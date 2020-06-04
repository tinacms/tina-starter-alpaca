import styled from "styled-components"

export const FooterWrapper = styled.footer`
  max-width: calc(1048px + 40px);
  margin: 0 auto;
  padding: 20px;
  .linksWrapper {
    padding-top: 32px;
  }
  @media all and (min-width: 768px) {
    & > div {
      display: flex;
      align-items: center;
      padding: 48px 0;
      max-width: 762px;
      margin-left: auto;
    }
    .linksWrapper {
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
  border: 1px solid ${({ theme }) => theme.colors.highlightBorder};
  background-color: #eff6fe;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  color: #333333;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 14px;
  padding-top: 6px;
  max-width: 264px;
  margin: 0 auto;
  i {
    margin-right: 7px;
    font-size: 18px;
    position: relative;
    top: -2px;
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    border-color: #77b1fa;
  }
  @media all and (min-width: 768px) {
    margin-right: 0;
  }
`
