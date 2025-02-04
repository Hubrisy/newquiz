import React, { useState } from "react"

import { Button } from "../../../components/button"
import { Input } from "../../../components/input"
import { useQuizContext } from "../../../context/quiz"
import { isNumber } from "../../../utils/validation"
import type { MeasurementSystem, QuizQuestionProps } from "../types"
import {
  HeightBlock,
  HeightContainer,
  MetricBlock,
  MetricItem,
  MetricSystemBlock,
  QuantitesContainer,
  QuantitiesBlock,
} from "./styled"

export const Height: React.FC<QuizQuestionProps> = ({
  goToNextQuestion,
  currentQuestion,
}) => {
  const { setAnswers } = useQuizContext()
  const [selectSystem, setSelectSystem] = useState<MeasurementSystem>("metric")
  const [value, setValue] = useState<Record<"cm" | "ft" | "in", string>>({
    cm: "",
    ft: "",
    in: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "cm" | "ft" | "in"
  ) => {
    const inputValue = e.target.value

    if (isNumber(inputValue) || inputValue === "") {
      setValue((prev) => ({
        ...prev,
        [field]: e.target.value,
      }))
    }
  }

  const nextPage = () => {
    const f = (result: string) => {
      setAnswers((prev) => {
        return {
          ...prev,
          [currentQuestion.key]: result,
        }
      })
      goToNextQuestion()
    }

    if (selectSystem === "metric") {
      if (isNumber(value.cm)) {
        f(value.cm)
      }
    } else if (selectSystem === "imperial") {
      if (isNumber(value.ft) && isNumber(value.in)) {
        const convertationToCm = (
          Number(value.ft) * 30.48 +
          Number(value.in) * 2.54
        ).toFixed(0)

        f(convertationToCm)
      }
    }
  }

  return (
    <HeightContainer>
      <HeightBlock>
        <h1>{currentQuestion.label}</h1>
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
          <QuantitesContainer>
            {selectSystem === "metric" && (
              <QuantitiesBlock>
                <Input
                  value={value.cm}
                  placeholder="cm"
                  onChange={(e) => handleInputChange(e, "cm")}
                />
              </QuantitiesBlock>
            )}
            {selectSystem === "imperial" && (
              <QuantitiesBlock>
                <Input
                  value={value.ft}
                  placeholder="ft"
                  onChange={(e) => handleInputChange(e, "ft")}
                />
                <Input
                  value={value.in}
                  placeholder="in"
                  onChange={(e) => handleInputChange(e, "in")}
                />
              </QuantitiesBlock>
            )}
          </QuantitesContainer>
        </MetricBlock>
        <Button onClick={nextPage}>Continue</Button>
      </HeightBlock>
    </HeightContainer>
  )
}
