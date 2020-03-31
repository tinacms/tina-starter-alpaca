import { WasThisHelpfulStyled, ReactionButton } from "./styles"

const WasThisHelpful = () => {
  return (
    <WasThisHelpfulStyled>
      <p>Was this helpful?</p>
      <div>
        <ReactionButton>
          <span>😭</span>
        </ReactionButton>
        <ReactionButton>
          <span>😕</span>
        </ReactionButton>
        <ReactionButton>
          <span>😁</span>
        </ReactionButton>
        <ReactionButton>
          <span>🤩</span>
        </ReactionButton>
      </div>
    </WasThisHelpfulStyled>
  )
}

export default WasThisHelpful
