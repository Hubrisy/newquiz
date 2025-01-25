export interface QuestionType {
  type: "single" | "multiple" | "info"
  label: string
  key: string
  options: Array<QuestionOptionsType>
}

export interface QuestionOptionsType {
  label: string
  value: string
  img?: string
  custom?: {
    deselectAll?: boolean
  }
}

export type AnswersType = Record<string, string>
