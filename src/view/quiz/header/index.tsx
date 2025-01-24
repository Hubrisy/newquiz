import React from "react"

import BackArrow from "../../../imgs/back.png"
import { HeaderStyledBlock, HeaderStyledContainer } from "./styled"

export const Header = () => {
  return (
    <HeaderStyledContainer>
      <HeaderStyledBlock>
        <div>
          <img src={BackArrow} alt="" />
          <span>Back</span>
        </div>
        <div>1 of 14</div>
      </HeaderStyledBlock>
    </HeaderStyledContainer>
  )
}
