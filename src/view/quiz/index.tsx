import React from "react"
import { useNavigate, useParams } from "react-router"

import { useQuizContext } from "../../context/quiz"
import { Routes } from "../../routes"
import { Header } from "./header"
import { MultipleQuestion } from "./multipleQuestionType"
import { SingleQuestion } from "./singleQuestionType"

export const Quiz = () => {
  const { questions } = useQuizContext()

  const params = useParams()
  const navigate = useNavigate()

  const currentIndex = Number(params.inx) - 1
  const currentQuestion = questions[currentIndex]

  const goToNextQuestion = () => {
    const nextNumber = currentIndex + 2

    if (nextNumber < questions.length) {
      navigate(Routes.quiz.replace(":inx", `${nextNumber}`))
    }
  }

  if (!questions.length) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header />
      {currentQuestion.type === "single" && (
        <SingleQuestion
          goToNextQuestion={goToNextQuestion}
          currentQuestion={currentQuestion}
        />
      )}
      {currentQuestion.type === "multiple" && (
        <MultipleQuestion
          goToNextQuestion={goToNextQuestion}
          currentQuestion={currentQuestion}
        />
      )}
    </div>
  )
}
