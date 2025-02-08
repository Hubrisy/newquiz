import type { QuestionType } from "../../types"

export interface QuizQuestionProps {
  goToNextQuestion: (answers: string) => void
  currentQuestion: QuestionType
}

export type MeasurementSystem = "imperial" | "metric"
