import styled, { css } from "styled-components"

export const LayoutStyled = styled.main`
  margin: 0;
  font-family: Roboto, system-ui, sans-serif;
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};

  h1 {
    font-size: 40px;
    margin: 0;
    margin-bottom: 16px;
    color: #333333;
    line-height: 56px;
    font-weight: 700;
  }
`

export const LayoutBodyStyled = styled.main`
  min-height: calc(100vh - 250px);
  max-width: calc(1048px + 40px);
  margin: 0 auto;
  padding: 0 20px;
  padding-bottom: 1px;
  padding-top: 6px;
  ${({ splitView }) =>
    splitView &&
    css`
      @media all and (min-width: 768px) {
        display: flex;
        padding-top: 24px;
      }
    `}
`
