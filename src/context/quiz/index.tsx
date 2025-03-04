import type { Dispatch, PropsWithChildren, SetStateAction } from "react"
import React, { createContext, useContext, useEffect, useState } from "react"

import MockApi from "../../apis/api"
import {
  type AnswersType,
  type QuestionType,
  SessionStorageKeys,
} from "../../types"
import { getFromSessionStorage, setToSessionStorage } from "../../utils/storage"

interface QuizContextType {
  questions: Array<QuestionType>
  setQuestions: Dispatch<SetStateAction<Array<QuestionType>>>
  answers: AnswersType
  setAnswers: Dispatch<SetStateAction<AnswersType>>
}

const defaultQuizData: QuizContextType = {
  questions: [],
  setQuestions: () => {},
  answers: {},
  setAnswers: () => {},
}

const QuizContext = createContext<QuizContextType>(defaultQuizData)

export const QuizContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [questions, setQuestions] = useState<Array<QuestionType>>([])
  const [answers, setAnswers] = useState<AnswersType>(() => {
    try {
      const data = getFromSessionStorage(SessionStorageKeys.answers)

      if (data) {
        return JSON.parse(data)
      }
    } catch (e) {
      console.error(e)
    }

    return {}
  })

  useEffect(() => {
    setToSessionStorage(SessionStorageKeys.answers, JSON.stringify(answers))
  }, [answers])

  useEffect(() => {
    const f = async () => {
      const result = (await MockApi()) as {
        data: {
          questions: Array<QuestionType>
        }
      }
      setQuestions(result.data.questions)
    }

    f()
  }, [])

  return (
    <QuizContext.Provider
      value={{ questions, setQuestions, answers, setAnswers }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export const useQuizContext = () => useContext(QuizContext)
