import React from "react"
import { Route, Routes } from "react-router"
import styled from "styled-components"

import { useQuizContext } from "./context/quiz"
import { Routes as RoutesEnum } from "./routes"
import { TitlePage } from "./view/home"
import { Quiz } from "./view/quiz"

const AppWrapper = styled.div`
  position: relative;
  z-index: 1;
`

function App() {
  const { answers, questions } = useQuizContext()

  console.log("Овтеты", answers)
  console.log("Вопросы", questions)

  return (
    <AppWrapper>
      <Routes>
        <Route path={RoutesEnum.root} element={<TitlePage />} />
        <Route path={RoutesEnum.quiz} element={<Quiz />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
