import { InputContainer } from './styles'
const InputComponent = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  )
}
export default InputComponent
