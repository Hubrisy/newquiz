import React, { useMemo, useState } from "react"

import { Input } from "../../../../components/input"
import { useQuizContext } from "../../../../context/quiz"
import { isNumber } from "../../../../utils/validation"
import type { QuizQuestionProps } from "../../types"
import { AnthropometryLayout } from "../Layout"
import { QuantitiesBlock } from "../styled"
import { useMetricSystem } from "../useMetricSystem"

export const Weight: React.FC<QuizQuestionProps> = ({
  goToNextQuestion,
  currentQuestion,
}) => {
  const { setAnswers } = useQuizContext()
  const [isError, setIsError] = useState(true)
  const { selectSystem, setSelectSystem } = useMetricSystem()
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
    <AnthropometryLayout
      title={currentQuestion.label}
      selectSystem={selectSystem}
      setSelectSystem={setSelectSystem}
      onClick={nextPage}
      isDisabled={isError || !!isDisabled}
    >
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
    </AnthropometryLayout>
  )
}
