import styled from "styled-components"

interface LineProps {
  width: string
}

export const HeaderStyledContainer = styled.div`
  height: 72px;
  width: 100%;
  border-bottom: 1px solid rgba(203, 202, 202, 0.46);
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
export const Line = styled.div<LineProps>`
  width: ${(props) => props.width || "0px"};
  height: 2px;
  background-color: #aa00ff;
`
