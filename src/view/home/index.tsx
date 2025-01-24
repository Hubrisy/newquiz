import React from "react"
import { useNavigate } from "react-router"

import { Button } from "../../components/button"
import Logo from "../../imgs/Logo.png"
import { Routes } from "../../routes"
import { TitleBlockInfo, TitleLogo, TitlePageBlock } from "./styled"

export const TitlePage = () => {
  const navigate = useNavigate()

  const goToQuiz = () => {
    navigate(Routes.quiz.replace(":inx", "1"))
  }

  return (
    <TitlePageBlock>
      <TitleBlockInfo>
        <div>Get back in shape.</div>
        <Button onClick={goToQuiz}>Start The Quiz</Button>
      </TitleBlockInfo>
      <TitleLogo>
        <img src={Logo} alt="" />
      </TitleLogo>
    </TitlePageBlock>
  )
}
