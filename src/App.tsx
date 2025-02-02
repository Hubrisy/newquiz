import React, { Suspense } from "react"
import { Route, Routes } from "react-router"
import styled from "styled-components"

import { useQuizContext } from "./context/quiz"
import { Routes as RoutesEnum } from "./routes"

const AppWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const LazyTitle = React.lazy(() =>
  import("./view/home").then((module) => ({ default: module.TitlePage }))
)
const LazyQuiz = React.lazy(() =>
  import("./view/quiz").then((module) => ({ default: module.Quiz }))
)
const LazyResult = React.lazy(() =>
  import("./view/quiz/results/dataResult").then((module) => ({
    default: module.DataResult,
  }))
)

function App() {
  const { answers, questions } = useQuizContext()
  console.log("Овтеты", answers)
  console.log("Вопросы", questions)

  return (
    <AppWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={RoutesEnum.root} element={<LazyTitle />} />
          <Route path={RoutesEnum.quiz} element={<LazyQuiz />} />
          <Route path={RoutesEnum.result} element={<LazyResult />} />
        </Routes>
      </Suspense>
    </AppWrapper>
  )
}

export default App
