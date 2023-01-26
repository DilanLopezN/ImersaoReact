import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  background-color: #384651;
  position: relative;
  margin-bottom: 24px;
`

export const PictureBackground = styled.img`
  width: 100%;
  height: 180px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    color: #ffffff;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`
export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border: 3px solid white;
`
export const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`
