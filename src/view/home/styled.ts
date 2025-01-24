import styled from "styled-components"

import { media } from "../../style/media"

export const TitlePageBlock = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${media.tablet} {
    flex-direction: column-reverse;
  }
  @media ${media.mobile} {
    height: 100%;
  }
`
export const TitleBlockInfo = styled.div`
  max-width: 545px;

  @media ${media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    font-size: 60px;
    font-weight: 700;
    line-height: 80px;

    @media ${media.mobile} {
      font-size: 28px;
    }
  }

  button {
    margin-top: 25px;

    @media ${media.tablet} {
      width: 100%;
    }
    @media ${media.mobile} {
      width: 325px;
    }
  }
`
export const TitleLogo = styled.div`
  img {
    @media ${media.mobile} {
      width: 320px;
    }
  }
`
