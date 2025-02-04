import styled, { css } from "styled-components"

interface MetricItemProps {
  isSelected: boolean
}

export const HeightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const HeightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    font-size: 37px;
    font-weight: 600;
    text-align: center;
  }

  button {
    margin-top: 32px;
  }
`

export const MetricBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  div {
    margin-top: 16px;
  }
`

export const MetricSystemBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
`

export const MetricItem = styled.div<MetricItemProps>`
  border: 2px solid grey;
  width: 100px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #aa00ff;
      color: white;
    `}
`

export const QuantitesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const QuantitiesBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

  input {
    margin-top: 0;
  }
`
