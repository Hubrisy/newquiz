import styled from "styled-components"

export const HeaderStyledContainer = styled.div`
  height: 72px;
  width: 100%;
  border-bottom: 2px solid grey;
`
export const HeaderStyledBlock = styled.div`
  width: 75%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
  }

  div:first-child {
    cursor: pointer;
  }
`
