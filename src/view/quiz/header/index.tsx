import React from "react"
import { useNavigate, useParams } from "react-router"

import { useQuizContext } from "../../../context/quiz"
import BackArrow from "../../../imgs/back.png"
import { HeaderStyledBlock, HeaderStyledContainer, Line } from "./styled"

export const Header = () => {
  const { questions } = useQuizContext()
  const navigate = useNavigate()
  const params = useParams()

  const goToPrevPage = () => {
    navigate(-1)
  }

  const questionWidth = 100 / questions.length
  const fieldWidth = questionWidth * Number(params.inx)
  const formatedFieldWidth = Number.isNaN(fieldWidth) ? 0 : fieldWidth

  return (
    <HeaderStyledContainer>
      <HeaderStyledBlock>
        <div onClick={goToPrevPage}>
          <img src={BackArrow} alt="" />
          <span>Back</span>
        </div>
        <div>
          {params.inx} of {questions.length}
        </div>
      </HeaderStyledBlock>
      <Line width={`${formatedFieldWidth}%`} />
    </HeaderStyledContainer>
  )
}
