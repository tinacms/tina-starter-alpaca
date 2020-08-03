import { useState, useReducer, useRef } from "react"

import { reducer, initialState } from "./reducer"

import { PostFeedbackStyled, ReactionButton, FeedbackForm, TextArea } from "./styles"
import { useCMS } from "tinacms"

const PostFeedback = () => {
  const cms = useCMS()
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  const [{ formStatus, reaction, comment }, dispatch] = useReducer(reducer, initialState)
  const reactionsList = [
    { icon: "icon-confused", value: "😕 Confused" },
    { icon: "icon-neutral", value: "😐 Neutral" },
    { icon: "icon-happy", value: "😄 Happy" },
  ]
  const emojiMap = {
    "😕 Confused ": ":confused:",
    "😐 Neutral": ":neutral_face:",
    "😄 Happy": ":smile:",
  }

  const textAreaRef = useRef()

  /* Methods */

  // method that is called when the form is submitted
  const onSubmit = async (formData) => {
    const response = await fetch(process.env.FEEDBACK_ENDPOINT || "/api/feedback", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(formData), // body data type must match "Content-Type" header
    })
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  }
  const setValue = (name, value) => {
    dispatch({ type: "set-value", value: { name, value } })
    if (!textAreaRef.current) {
      setTimeout(() => textAreaRef.current.focus(), 150)
    } else {
      textAreaRef.current.focus()
    }
  }

  const sendFeedback = async () => {
    if (!comment) {
      dispatch({ type: "set-error" })
    } else {
      try {
        await onSubmit({
          reaction,
          comment,
          location: window.location.pathname,
          tag: emojiMap[reaction],
        })
        cms.alerts.success("Your feedback has been submitted")
        dispatch({ type: "set-success" })
      } catch (err) {
        console.error(err)
        cms.alerts.error("there was an error in submitting your feedback")
        dispatch({ type: "set-error-send" })
      }
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
                {formStatus === "ERROR_SEND" && <p>Error in sending feedback</p>}
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
