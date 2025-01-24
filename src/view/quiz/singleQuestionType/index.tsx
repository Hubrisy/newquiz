import React from "react"

import { useQuizContext } from "../../../context/quiz"
import Arrow from "../../../imgs/arrow.png"
import type { QuestionType } from "../../../types"
import { QuestionItem, QuestionsBlock, QuizContainer } from "../styled"

interface Props {
  currentQuestion: QuestionType
  goToNextQuestion: () => void
}

export const SingleQuestion: React.FC<Props> = ({
  currentQuestion,
  goToNextQuestion,
}) => {
  const { setAnswers } = useQuizContext()

  const handleClick = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.key]: answer,
    }))

    goToNextQuestion()
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
