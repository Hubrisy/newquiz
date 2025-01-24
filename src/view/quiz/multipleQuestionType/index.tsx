import React, { useState } from "react"

import { Button } from "../../../components/button"
import { useQuizContext } from "../../../context/quiz"
import type { QuestionType } from "../../../types"
import { QuestionItem, QuestionsBlock, QuizContainer } from "../styled"

interface Props {
  currentQuestion: QuestionType
  goToNextQuestion: () => void
}

export const MultipleQuestion: React.FC<Props> = ({
  currentQuestion,
  goToNextQuestion,
}) => {
  const { answers, setAnswers } = useQuizContext()
  const [checkedOptions, setCheckedOptions] = useState<Array<string>>(() => {
    const answer = answers[currentQuestion.key]

    if (answer) {
      return answer.split("|")
    }

    return []
  })

  const handleChange = (answer: string) => {
    let newCheckedOptions = [...checkedOptions]

    const isAlreadyInTheAnswers = newCheckedOptions.includes(answer)

    if (isAlreadyInTheAnswers) {
      newCheckedOptions = newCheckedOptions.filter(
        (option) => option !== answer
      )
    } else {
      newCheckedOptions.push(answer)
    }

    setCheckedOptions(newCheckedOptions)
  }

  const nextPage = () => {
    setAnswers((prev) => {
      return {
        ...prev,
        [currentQuestion.key]: checkedOptions.join("|"),
      }
    })

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
                <QuestionItem onClick={() => handleChange(option.value)}>
                  <label htmlFor={option.label}>{option.label}</label>
                  <input
                    type="checkbox"
                    name="option[]"
                    value={option.label}
                    checked={checkedOptions.includes(option.value)}
                  />
                </QuestionItem>
              </div>
            ))
          ) : (
            <div>No data</div>
          )}
        </QuestionsBlock>
      </div>
      <Button onClick={nextPage}>Continue</Button>
    </QuizContainer>
  )
}
