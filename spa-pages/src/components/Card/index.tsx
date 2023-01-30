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
      <PictureBackground src="https://mentorama.com.br/blog/wp-content/uploads/2022/06/capa-blog-coding-iniciante-1536x525.jpg" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/92648265?v=4" />
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
