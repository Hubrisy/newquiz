import React, { useState } from "react"

import { Button } from "../../../components/button"
import { useQuizContext } from "../../../context/quiz"
import type { QuestionOptionsType } from "../../../types"
import { QuestionItem, QuestionsBlock, QuizContainer } from "../styled"
import type { QuizQuestionProps } from "../types"

export const MultipleQuestion: React.FC<QuizQuestionProps> = ({
  currentQuestion,
  goToNextQuestion,
}) => {
  const { answers } = useQuizContext()
  const [checkedOptions, setCheckedOptions] = useState<
    Array<QuestionOptionsType>
  >(() => {
    if (answers[currentQuestion.key]) {
      const splitAnswers = answers[currentQuestion.key].split("|")

      if (currentQuestion.options) {
        return currentQuestion.options.filter((option) =>
          splitAnswers.includes(option.value)
        )
      }
    }

    return []
  })

  const handleChange = (answer: QuestionOptionsType) => {
    if (answer.custom?.deselectAll) {
      setCheckedOptions([answer])

      return
    }

    const newOptions = checkedOptions.filter((opt) => !opt.custom?.deselectAll)

    const isAlreadyExist = newOptions.some((opt) => opt.value === answer.value)

    if (isAlreadyExist) {
      const filteredOptions = newOptions.filter(
        (opt) => opt.value !== answer.value
      )

      setCheckedOptions(filteredOptions)
    } else {
      setCheckedOptions([...newOptions, answer])
    }
  }

  const nextPage = () => {
    if (checkedOptions.length) {
      goToNextQuestion(checkedOptions.map((option) => option.value).join("|"))
    }
  }

  return (
    <QuizContainer>
      <div>
        <h1>{currentQuestion?.label}</h1>
        <QuestionsBlock>
          {currentQuestion?.options ? (
            currentQuestion?.options.map((option) => {
              const isChecked = checkedOptions.some(
                (opt) => opt.value === option.value
              )

              return (
                <div key={option.value}>
                  <QuestionItem
                    border={isChecked ? "2px solid #aa00ff" : "2px solid grey"}
                    onClick={() => handleChange(option)}
                  >
                    {option.img && <img src={option.img} alt="" />}
                    <label htmlFor={option.label}>{option.label}</label>
                    <input
                      type="checkbox"
                      name="option[]"
                      value={option.label}
                      checked={isChecked}
                    />
                  </QuestionItem>
                </div>
              )
            })
          ) : (
            <div>No data</div>
          )}
        </QuestionsBlock>
      </div>
      <Button disabled={!checkedOptions.length} onClick={nextPage}>
        Continue
      </Button>
    </QuizContainer>
  )
}
