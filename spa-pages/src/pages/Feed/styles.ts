import styled from 'styled-components'
interface IStyled {
  flex: number
}

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 2rem;

  margin-bottom: 1.25rem;
  line-height: 2.75rem;

  color: white;

  span {
    color: #61dcfb;
  }
`
export const TitleHigh = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  color: violet;
  line-height: 2.75rem;
`

export const Column = styled.div<IStyled>`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`
