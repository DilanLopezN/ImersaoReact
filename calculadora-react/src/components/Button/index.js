import { ButtonContainer } from './styles'
export const Button = ({ label, onClick, value }) => {
  return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
}
export default Button
