import type { PropsWithChildren } from "react"
import React from "react"
import styled from "styled-components"

interface ButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  type?: "submit" | "reset" | "button"
}

const ButtonStyled = styled.button`
  width: 350px;
  height: 50px;
  background-color: #aa00ff;
  text-align: center;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Button: React.FC<PropsWithChildren<ButtonI>> = ({
  onClick,
  type = "button",
  children,
  ...rest
}) => {
  return (
    <ButtonStyled onClick={onClick} type={type} {...rest}>
      {children}
    </ButtonStyled>
  )
}
