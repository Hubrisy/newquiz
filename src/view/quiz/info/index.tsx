import React from "react"

import { Button } from "../../../components/button"
import { InfoBlock, InfoContainer, InfoText } from "../styled"
import type { QuizQuestionProps } from "../types"

export const Info: React.FC<QuizQuestionProps> = ({
  currentQuestion,
  goToNextQuestion,
}) => {
  const nextPage = () => {
    goToNextQuestion()
  }

  return (
    <InfoContainer>
      <InfoBlock>
        <h1>{currentQuestion.label}</h1>
        <InfoText>{currentQuestion.description}</InfoText>
        <div>
          <img src={currentQuestion.img} alt="" />
        </div>
      </InfoBlock>
      <Button onClick={nextPage}>OK, lets do it!</Button>
    </InfoContainer>
  )
}
