import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`
export const Column = styled.div`
  flex: 1;
  flex-direction: column;
`
export const Row = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
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
