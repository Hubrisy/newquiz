import React from "react"
import { useNavigate, useParams } from "react-router"

import { useQuizContext } from "../../context/quiz"
import { Routes } from "../../routes"
import { Header } from "./header"
import type { QuizQuestionProps } from "./types"

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
const LazyHeight = React.lazy(() =>
  import("./anthropometry/height").then((module) => ({
    default: module.Height,
  }))
)
const LazyWeight = React.lazy(() =>
  import("./anthropometry/weight").then((module) => ({
    default: module.Weight,
  }))
)

export const Quiz = () => {
  const { questions, setAnswers } = useQuizContext()

  const params = useParams()
  const navigate = useNavigate()

  const currentIndex = Number(params.inx) - 1
  const currentQuestion = questions[currentIndex]

  const goToNextQuestion = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.key]: answer,
    }))

    const nextNumber = currentIndex + 2

    if (nextNumber <= questions.length) {
      if (
        currentQuestion.key === "primary_goal" &&
        answer !== "improve_specific_body_areas"
      ) {
        navigate(Routes.quiz.replace(":inx", `${nextNumber + 1}`))
      } else {
        navigate(Routes.quiz.replace(":inx", `${nextNumber}`))
      }
    } else {
      navigate(Routes.result)
    }
  }

  const questionProps: QuizQuestionProps = {
    goToNextQuestion,
    currentQuestion,
  }

  if (!questions.length) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header />
      {currentQuestion.type === "single" && (
        <LazySingleQuestion {...questionProps} />
      )}
      {currentQuestion.type === "multiple" && (
        <LazyMultipleQuestion {...questionProps} />
      )}
      {currentQuestion.type === "info" && <LazyInfo {...questionProps} />}
      {currentQuestion.type === "age" && <LazyAge {...questionProps} />}
      {currentQuestion.type === "height" && <LazyHeight {...questionProps} />}
      {currentQuestion.type === "weight" && <LazyWeight {...questionProps} />}
    </div>
  )
}
