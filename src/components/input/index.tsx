import React from "react"
import styled, { css } from "styled-components"

interface InputStyleProps {
  isError?: boolean
}

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputStyleProps {
  errorMessage?: string
}

const InputStyled = styled.input<InputStyleProps>`
  padding: 16px;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  margin-top: 32px;
  border-radius: 8px;
  border: 2px solid grey;

  ${({ isError }) => {
    return (
      isError &&
      css`
        border-color: red;
      `
    )
  }}

  &:focus {
    border-color: #aa00ff;
    outline: none;
  }
`

const ErrorStyled = styled.div`
  font-size: 14px;
  color: red;
`

export const Input: React.FC<InputProps> = ({
  onChange,
  name,
  placeholder,
  type,
  inputMode,
  isError,
  errorMessage,
  value,
  ...rest
}) => {
  return (
    <div>
      <InputStyled
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        type={type}
        inputMode={inputMode}
        isError={isError}
        value={value}
        {...rest}
      />
      {errorMessage && <ErrorStyled>{errorMessage}</ErrorStyled>}
    </div>
  )
}
