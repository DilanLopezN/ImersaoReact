import React from 'react'
import { Controller } from 'react-hook-form'
import { IconContainer, InputContainer, InputText, ErrorText } from './styles'
interface InputI {
  name: string
  leftIcon?: React.ReactNode
  control: any
  errorMessage?: any
  placeholder?: string
  type?: string
}

export function Input({
  leftIcon,
  name,
  control,
  errorMessage,
  ...rest
}: InputI) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}
