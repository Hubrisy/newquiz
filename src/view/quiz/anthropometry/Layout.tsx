import type { Dispatch, SetStateAction } from "react"
import React from "react"

import { Button } from "../../../components/button"
import type { MeasurementSystem } from "../types"
import {
  AnthropometryBlock,
  AnthropometryContainer,
  MetricBlock,
  MetricItem,
  MetricSystemBlock,
  QuantitesContainer,
} from "./styled"

interface Props extends React.PropsWithChildren {
  title: string
  selectSystem: MeasurementSystem
  setSelectSystem: Dispatch<SetStateAction<MeasurementSystem>>
  onClick: () => void
  isDisabled: boolean
}

export const AnthropometryLayout: React.FC<Props> = ({
  title,
  selectSystem,
  setSelectSystem,
  children,
  onClick,
  isDisabled,
}) => {
  return (
    <AnthropometryContainer>
      <AnthropometryBlock>
        <h1>{title}</h1>
        <MetricBlock>
          <MetricSystemBlock>
            <div onClick={() => setSelectSystem("metric")}>
              <MetricItem isSelected={selectSystem === "metric"}>
                Metric
              </MetricItem>
            </div>
            <div onClick={() => setSelectSystem("imperial")}>
              <MetricItem isSelected={selectSystem === "imperial"}>
                Imperial
              </MetricItem>
            </div>
          </MetricSystemBlock>
          <QuantitesContainer>{children}</QuantitesContainer>
        </MetricBlock>
        <Button onClick={onClick} disabled={isDisabled}>
          Continue
        </Button>
      </AnthropometryBlock>
    </AnthropometryContainer>
  )
}
