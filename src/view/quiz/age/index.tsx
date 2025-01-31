import React, { useState } from "react"

import { useQuizContext } from "../../../context/quiz"
import type { QuestionType } from "../../../types"
import { AgeBlock, AgeContainer, Button } from "./styled"

interface Props {
  goToNextQuestion: () => void
  currentQuestion: QuestionType
}

export const Age: React.FC<Props> = ({ goToNextQuestion, currentQuestion }) => {
  const [value, setValue] = useState("")
  const { setAnswers } = useQuizContext()

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const goToNextPage = () => {
    if (value) {
      setAnswers((prev) => {
        return { ...prev, [currentQuestion.key]: value }
      })
      goToNextQuestion()
    }
  }

  return (
    <AgeContainer>
      <AgeBlock>
        <h1>How young are you?</h1>
        <input
          name="age"
          value={value}
          type="text"
          placeholder="Age"
          inputMode="numeric"
          onChange={handleValue}
        />
        <Button
          color={value && "white"}
          backgroundColor={value && "#aa00ff"}
          onClick={goToNextPage}
        >
          Next
        </Button>
      </AgeBlock>
    </AgeContainer>
  )
}
