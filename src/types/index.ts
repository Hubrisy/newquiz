export interface QuestionType {
  type: "single" | "multiple" | "info" | "age" | "height" | "weight"
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
  system_name?: string
  quantity_one?: string
  quantity_two?: string
}

export type AnswersType = Record<string, string>

export enum SessionStorageKeys {
  answers = "answers",
}
