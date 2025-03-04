import "./index.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { createGlobalStyle } from "styled-components"

import App from "./App"
import { QuizContextProvider } from "./context/quiz"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  button{
    cursor: pointer;
  }
}
`

root.render(
  <QuizContextProvider>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </QuizContextProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
