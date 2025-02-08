import React from "react"

import Arrow from "../../../imgs/arrow.png"
import { QuestionItem, QuestionsBlock, QuizContainer } from "../styled"
import type { QuizQuestionProps } from "../types"

export const SingleQuestion: React.FC<QuizQuestionProps> = ({
  currentQuestion,
  goToNextQuestion,
}) => {
  const handleClick = (answer: string) => {
    goToNextQuestion(answer)
  }

  return (
    <QuizContainer>
      <div>
        <h1>{currentQuestion?.label}</h1>
        <QuestionsBlock>
          {currentQuestion?.options ? (
            currentQuestion?.options.map((option) => (
              <div key={option.value}>
                <QuestionItem onClick={() => handleClick(option.value)}>
                  {option.img && <img src={option.img} alt="" />}
                  <div>{option.label}</div>
                  <img src={Arrow} alt="" />
                </QuestionItem>
              </div>
            ))
          ) : (
            <div>No data</div>
          )}
        </QuestionsBlock>
      </div>
    </QuizContainer>
  )
}
