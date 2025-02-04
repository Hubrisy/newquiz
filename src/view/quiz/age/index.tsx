import React, { useState } from "react"

import { Button } from "../../../components/button"
import { Input } from "../../../components/input"
import { useQuizContext } from "../../../context/quiz"
import { isNumber } from "../../../utils/validation"
import type { QuizQuestionProps } from "../types"
import { AgeBlock, AgeContainer } from "./styled"

export const Age: React.FC<QuizQuestionProps> = ({
  goToNextQuestion,
  currentQuestion,
}) => {
  const [value, setValue] = useState("")
  const [isError, setIsError] = useState(false)
  const { setAnswers } = useQuizContext()

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    if (isNumber(inputValue) || inputValue === "") {
      const isValueValid = Number(inputValue) >= 18 && Number(inputValue) < 100

      setIsError(!isValueValid)
      setValue(inputValue)
    }
  }

  const goToNextPage = () => {
    if (!isError) {
      setAnswers((prev) => {
        return { ...prev, [currentQuestion.key]: value }
      })
      goToNextQuestion()
    }
  }

  return (
    <AgeContainer>
      <AgeBlock>
        <h1>{currentQuestion.label}</h1>
        <Input
          name="age"
          value={value}
          type="text"
          placeholder="Age"
          inputMode="numeric"
          onChange={handleValue}
          isError={isError}
          errorMessage={
            isError
              ? "Your age should be higher 18 or higher and less then 100"
              : undefined
          }
        />
        <Button onClick={goToNextPage} disabled={isError}>
          Next
        </Button>
      </AgeBlock>
    </AgeContainer>
  )
}
