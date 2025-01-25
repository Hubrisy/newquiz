import React from "react"
import { useNavigate, useParams } from "react-router"

import { useQuizContext } from "../../../context/quiz"
import BackArrow from "../../../imgs/back.png"
import { HeaderStyledBlock, HeaderStyledContainer } from "./styled"

export const Header = () => {
  const { questions } = useQuizContext()
  const navigate = useNavigate()
  const params = useParams()

  const goToPrevPage = () => {
    navigate(-1)
  }

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
    </HeaderStyledContainer>
  )
}
