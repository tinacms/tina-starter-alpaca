import styled, { css } from "styled-components"

export const PostFeedbackStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ReactionButton = styled.button`
  background-color: transparent;
  font-size: 24px;
  border: 0;
  padding: 0.5rem;
  margin: 0 0.7rem;
  cursor: pointer;
  opacity: 0.6;
  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `}
`

export const FeedbackForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: strecth;
  width: 100%;
  max-width: 408px;
`

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  font-size: 14px;
  padding: 1rem;
  box-sizing: border-box;
`
