import { useState, useReducer } from "react"

import { reducer, initialState } from "./reducer"
// import FeedbackForm from "./feedback-form"

import { PostFeedbackStyled, ReactionButton, FeedbackForm, TextArea } from "./styles"

const PostFeedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  const [{ formStatus, reaction, comment }, dispatch] = useReducer(reducer, initialState)
  const reactionsList = [
    { emoticon: ":/", value: "meh" },
    { emoticon: "._.", value: "normal" },
    { emoticon: ":D", value: "happy" },
  ]

  /* Methods */
  const setValue = (name, value) => {
    dispatch({ type: "set-value", value: { name, value } })
  }

  const sendFeedback = () => {
    if (!comment) {
      dispatch({ type: "set-error" })
    } else {
      dispatch({ type: "set-success" })
    }
  }

  const renderReactionButton = (reactionData, reactionSelected) => {
    return (
      <ReactionButton
        active={reactionSelected === reactionData.value}
        onClick={() => {
          setShowFeedbackForm(true)
          setValue("reaction", reactionData.value)
        }}
        key={reactionData.value}
      >
        <span>{reactionData.emoticon}</span>
      </ReactionButton>
    )
  }

  return (
    <PostFeedbackStyled>
      {formStatus !== "SUCCESS" && (
        <>
          <p>Was this helpful?</p>
          <FeedbackForm>
            <div>
              {reactionsList.map((reactionData) => renderReactionButton(reactionData, reaction))}
            </div>
            {showFeedbackForm && (
              <div className="inputWrapper">
                <TextArea
                  rows={3}
                  placeholder="Please enter your feedback..."
                  value={comment}
                  onChange={(e) => setValue("comment", e.target.value)}
                />
                {formStatus === "ERROR" && <p>Comment can&apos;t be empty</p>}
                <button onClick={sendFeedback}>Send</button>
              </div>
            )}
          </FeedbackForm>
        </>
      )}
      {formStatus === "SUCCESS" && (
        <>
          <p>Your feedback has been received!</p>
          <p>Thank you for your help.</p>
        </>
      )}
    </PostFeedbackStyled>
  )
}

export default PostFeedback
