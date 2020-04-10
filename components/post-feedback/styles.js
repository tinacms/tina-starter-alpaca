import styled, { css } from "styled-components"

export const PostFeedbackStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 0;
  padding-bottom: 48px;
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  p {
    margin: 0;
    margin-bottom: 44px;
    font-weight: 700;
    color: #333333;
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    padding: 50px 0;
    border-bottom-width: 0;
  }
  .success-message {
    p {
      margin-bottom: 12px;
      font-weight: 400;
    }
  }
`

export const ReactionButton = styled.button`
  background-color: transparent;
  font-size: 12px;
  border: 0;
  padding: 0.5rem;
  margin-right: 66px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #707070;
  color: #707070;
  height: 29px;
  width: 29px;
  background-color: #f3f2f2;
  outline: 0;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #77b1fa;
    border-color: #77b1fa;
    background-color: #eef6ff;
  }
  &:last-child {
    font-size: 16px;
    i {
      top: 6px;
      left: 4px;
    }
  }
  i {
    position: absolute;
    left: 6px;
    top: 8px;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: #eef6ff;
      color: #0071f0;
      border-color: #0071f0;
      &:hover {
        background-color: #eef6ff;
        color: #0071f0;
        border-color: #0071f0;
      }
    `}
  @media all and (min-width: 768px) {
    margin-right: 73px;
  }
`

export const FeedbackForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: strecth;
  width: 100%;
  max-width: 408px;
  .inputWrapper {
    padding-top: 24px;
    button {
      outline: 0;
      border: 0;
      background-color: #0071f0;
      color: white;
      padding: 0.3rem 1rem;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    p {
      margin: 0;
      margin-bottom: 16px;
      font-size: 12px;
      font-weight: 400;
      color: #ac2902;
    }
  }
`

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  font-size: 14px;
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid #f6f6f6;
  outline: 0;
  margin-bottom: 16px;
  &:focus {
    border-color: #0071f0;
  }
`
