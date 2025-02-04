import type { QuestionType } from "../../types"

export interface QuizQuestionProps {
  goToNextQuestion: () => void
  currentQuestion: QuestionType
}

export type MeasurementSystem = "imperial" | "metric"
