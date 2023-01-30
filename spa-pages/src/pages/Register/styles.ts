import styled from 'styled-components'

export const Container = styled.main`
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  margin-top: 7rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  width: 320px;
  margin-bottom: 1.25rem;
  line-height: 2.75rem;

  color: white;

  span {
    color: #61dcfb;
  }
`
export const Wrapper = styled.div`
  max-width: 300px;
  padding: 4px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
`
export const Column = styled.div`
  text-align: center;
`

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  width: 320px;
  margin-bottom: 2.18rem;
  line-height: 1.55rem;

  color: white;

  span {
    color: #61dcfb;
  }
`
export const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  margin-top: 1rem;

  p {
    font-weight: 500;
    color: cyan;
  }

  strong {
    font-weight: 500;
    color: yellow;
  }
`
