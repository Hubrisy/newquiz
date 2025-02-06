import React, { useMemo, useState } from "react"

import { Button } from "../../../../components/button"
import { Input } from "../../../../components/input"
import { useQuizContext } from "../../../../context/quiz"
import { isNumber } from "../../../../utils/validation"
import type { MeasurementSystem, QuizQuestionProps } from "../../types"
import {
  AnthropometryBlock,
  AnthropometryContainer,
  MetricBlock,
  MetricItem,
  MetricSystemBlock,
  QuantitesContainer,
  QuantitiesBlock,
} from "../styled"

export const Weight: React.FC<QuizQuestionProps> = ({
  goToNextQuestion,
  currentQuestion,
}) => {
  const { setAnswers } = useQuizContext()
  const [isError, setIsError] = useState(true)
  const [selectSystem, setSelectSystem] = useState<MeasurementSystem>("metric")
  const [value, setValue] = useState<Record<"kg" | "lb", string>>({
    kg: "",
    lb: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "kg" | "lb"
  ) => {
    const inputValue = e.target.value

    if (isNumber(inputValue) || inputValue === "") {
      setIsError(false)
      setValue((prev) => ({
        ...prev,
        [field]: e.target.value,
      }))
    } else {
      setIsError(true)
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

    if (!isError) {
      if (selectSystem === "metric") {
        if (isNumber(value.kg)) {
          f(value.kg)
        }
      } else if (selectSystem === "imperial") {
        if (isNumber(value.lb)) {
          const convertationToKg = (Number(value.lb) / 2.2).toFixed(0)

          f(convertationToKg)
        }
      }
    }
  }

  const isDisabled = useMemo(() => {
    if (selectSystem === "metric") {
      if (value.kg === "") {
        return true
      }

      return false
    }

    if (selectSystem === "imperial") {
      if (value.lb === "") {
        return true
      }

      return false
    }
  }, [value, selectSystem])

  return (
    <AnthropometryContainer>
      <AnthropometryBlock>
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
                  value={value.kg}
                  placeholder="kg"
                  onChange={(e) => handleInputChange(e, "kg")}
                />
              </QuantitiesBlock>
            )}
            {selectSystem === "imperial" && (
              <QuantitiesBlock>
                <Input
                  value={value.lb}
                  placeholder="lb"
                  onChange={(e) => handleInputChange(e, "lb")}
                />
              </QuantitiesBlock>
            )}
          </QuantitesContainer>
        </MetricBlock>
        <Button onClick={nextPage} disabled={isError || isDisabled}>
          Continue
        </Button>
      </AnthropometryBlock>
    </AnthropometryContainer>
  )
}
