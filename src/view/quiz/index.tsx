import React from "react"
import { useNavigate, useParams } from "react-router"

import { useQuizContext } from "../../context/quiz"
import { Routes } from "../../routes"
import { Header } from "./header"

const LazySingleQuestion = React.lazy(() =>
  import("./singleQuestion").then((module) => ({
    default: module.SingleQuestion,
  }))
)

const LazyMultipleQuestion = React.lazy(() =>
  import("./multipleQuestion").then((module) => ({
    default: module.MultipleQuestion,
  }))
)

const LazyAge = React.lazy(() =>
  import("./age").then((module) => ({
    default: module.Age,
  }))
)

const LazyInfo = React.lazy(() =>
  import("./info").then((module) => ({
    default: module.Info,
  }))
)

export const Quiz = () => {
  const { questions } = useQuizContext()

  const params = useParams()
  const navigate = useNavigate()

  const currentIndex = Number(params.inx) - 1
  const currentQuestion = questions[currentIndex]

  const goToNextQuestion = () => {
    const nextNumber = currentIndex + 2
    console.log("Navigating to:", nextNumber)

    if (nextNumber <= questions.length) {
      navigate(Routes.quiz.replace(":inx", `${nextNumber}`))
    } else {
      navigate(Routes.result)
    }
  }

  if (!questions.length) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header />
      {currentQuestion.type === "single" && (
        <LazySingleQuestion
          goToNextQuestion={goToNextQuestion}
          currentQuestion={currentQuestion}
        />
      )}
      {currentQuestion.type === "multiple" && (
        <LazyMultipleQuestion
          goToNextQuestion={goToNextQuestion}
          currentQuestion={currentQuestion}
        />
      )}
      {currentQuestion.type === "info" && (
        <LazyInfo
          goToNextQuestion={goToNextQuestion}
          currentQuestion={currentQuestion}
        />
      )}
      {currentQuestion.type === "age" && (
        <LazyAge
          goToNextQuestion={goToNextQuestion}
          currentQuestion={currentQuestion}
        />
      )}
    </div>
  )
}
