import { Controller } from 'react-hook-form'
import { IconContainer, InputContainer, InputText } from './styles'
export function Input({ leftIcon, name, control, ...rest }) {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} {...rest} />}
      />
    </InputContainer>
  )
}
