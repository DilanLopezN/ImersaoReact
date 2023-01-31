import styled from 'styled-components'
interface IStyles {
  percentual: number
}
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`
export const UserPicture = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 1px solid cyan;
  border-radius: 4rem;
  margin-right: 12px;
`
export const Progress = styled.div<IStyles>`
  width: 180px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    height: 6px;
    border-radius: 3px;
    background-color: #23dd7a;
  }
`
