import styled from "styled-components"

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const ResultBlock = styled.div`
  width: 350px;
  text-align: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
  }
`

export const LineBlock = styled.div`
  width: 100%;
  height: 4px;
  background-color: #eeeeee;
  margin-top: 47px;
  position: relative;
  z-index: 1;
`

export const Line = styled.div`
  position: absolute;
  z-index: 2;
  background-color: #aa00ff;
  height: 100%;
  width: 0%;
  animation: progressBar 3s ease-in-out forwards;

  @keyframes progressBar {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`
