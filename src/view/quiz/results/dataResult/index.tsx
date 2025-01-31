import React from "react"

import { Line, LineBlock, ResultBlock, ResultContainer } from "./styled"

export const DataResult = () => {
  return (
    <ResultContainer>
      <ResultBlock>
        <h1>Analyzing your data...</h1>
        <LineBlock>
          <Line />
        </LineBlock>
      </ResultBlock>
    </ResultContainer>
  )
}
