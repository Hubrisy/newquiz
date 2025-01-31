import styled from "styled-components"

interface BtnProps {
  backgroundColor?: string
  color?: string
}

export const AgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const AgeBlock = styled.div`
  width: 350px;

  h1 {
    font-size: 37px;
    font-weight: 600;
    text-align: center;
  }

  input {
    padding: 16px;
    font-weight: 400;
    font-size: 16px;
    width: 100%;
    margin-top: 32px;
    border-radius: 8px;
    border: 2px solid grey;

    &:focus {
      border-color: #aa00ff;
      outline: none;
    }
  }
`

export const Button = styled.button<BtnProps>`
  width: 350px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor || "#eeeeee"};
  color: ${(props) => props.color || "rgba(33, 33, 33, 0.26)"};
  text-align: center;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  margin-top: 32px;
`
