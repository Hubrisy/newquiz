export interface QuestionType {
  type: "single" | "multiple" | "info" | "age"
  label: string
  key: string
  options?: Array<QuestionOptionsType>
  description?: string
  img?: string
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

export enum SessionStorageKeys {
  answers = "answers",
}
