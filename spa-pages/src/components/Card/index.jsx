import {
  CardContainer,
  Content,
  PictureBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from './styles'
import { FiThumbsUp } from 'react-icons/fi'
export function Card() {
  return (
    <CardContainer>
      <PictureBackground />
      <Content>
        <UserInfo>
          <UserPicture />
          <h4>Dilan lopez</h4>
          <p>Há 8 minutos</p>
        </UserInfo>
        <PostInfo>
          <h4>Curso fundamentos do React</h4>
          <p>Projeto feito para ensino de fundamentos do react</p>
          <strong>saiba mais...</strong>
        </PostInfo>
        <div>
          <FiThumbsUp /> 18
        </div>
      </Content>
    </CardContainer>
  )
}
