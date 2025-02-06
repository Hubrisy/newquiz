import React, { useMemo, useState } from "react"

import { Input } from "../../../../components/input"
import { useQuizContext } from "../../../../context/quiz"
import { isNumber } from "../../../../utils/validation"
import type { QuizQuestionProps } from "../../types"
import { AnthropometryLayout } from "../Layout"
import { QuantitiesBlock } from "../styled"
import { useMetricSystem } from "../useMetricSystem"

export const Height: React.FC<QuizQuestionProps> = ({
  goToNextQuestion,
  currentQuestion,
}) => {
  const { setAnswers } = useQuizContext()
  const { selectSystem, setSelectSystem } = useMetricSystem()
  const [isError, setIsError] = useState(true)
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
  }

  const isDisabled = useMemo(() => {
    if (selectSystem === "metric") {
      if (value.cm === "") {
        return true
      }

      return false
    }

    if (selectSystem === "imperial") {
      if (value.ft === "" || value.in === "") {
        return true
      }

      return false
    }
  }, [value, selectSystem])

  return (
    <AnthropometryLayout
      isDisabled={isError || !!isDisabled}
      selectSystem={selectSystem}
      setSelectSystem={setSelectSystem}
      title={currentQuestion.label}
      onClick={nextPage}
    >
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
    </AnthropometryLayout>
  )
}
