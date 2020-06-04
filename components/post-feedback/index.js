import { useState, useReducer, useRef } from "react"

import { reducer, initialState } from "./reducer"

import { PostFeedbackStyled, ReactionButton, FeedbackForm, TextArea } from "./styles"

const onSubmit = (formData) => {
  console.log({ formData })
  fetch("https://formspree.io/mdowgzjl", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(formData), // body data type must match "Content-Type" header
  }).then((res) => {
    console.log(res)
  })
}
const PostFeedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  const [{ formStatus, reaction, comment }, dispatch] = useReducer(reducer, initialState)
  const reactionsList = [
    { icon: "icon-confused", value: "confused" },
    { icon: "icon-neutral", value: "neutral" },
    { icon: "icon-happy", value: "happy" },
  ]
  const textAreaRef = useRef()

  /* Methods */
  const setValue = (name, value) => {
    dispatch({ type: "set-value", value: { name, value } })
    if (!textAreaRef.current) {
      setTimeout(() => textAreaRef.current.focus(), 150)
    } else {
      textAreaRef.current.focus()
    }
  }

  const sendFeedback = () => {
    if (!comment) {
      dispatch({ type: "set-error" })
    } else {
      onSubmit({ reaction, comment })
      dispatch({ type: "set-success" })
    }
  }

  const renderReactionButton = (reactionData) => {
    return (
      <ReactionButton
        active={reaction === reactionData.value}
        onClick={() => {
          setShowFeedbackForm(true)
          setValue("reaction", reactionData.value)
        }}
        key={reactionData.value}
      >
        <i className={reactionData.icon} />
      </ReactionButton>
    )
  }

  return (
    <PostFeedbackStyled>
      {formStatus !== "SUCCESS" && (
        <>
          <p>Was this helpful?</p>
          <FeedbackForm>
            <div>{reactionsList.map((reactionData) => renderReactionButton(reactionData))}</div>
            {showFeedbackForm && (
              <div className="inputWrapper">
                <TextArea
                  rows={3}
                  placeholder="Please enter your feedback..."
                  value={comment}
                  onChange={(e) => setValue("comment", e.target.value)}
                  ref={textAreaRef}
                />
                {formStatus === "ERROR" && <p>Feedback can&apos;t be empty</p>}
                <button onClick={sendFeedback}>Send</button>
              </div>
            )}
          </FeedbackForm>
        </>
      )}
      {formStatus === "SUCCESS" && (
        <div className="success-message">
          <p>Your feedback has been received!</p>
          <p>Thank you for your help.</p>
        </div>
      )}
    </PostFeedbackStyled>
  )
}

export default PostFeedback
