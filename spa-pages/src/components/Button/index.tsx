import React from 'react'
import { ButtonContainer } from './styles'

interface IButton {
  title: string
  variant?: string
  type?: string
  isDisabled?: any
  onClick?: () => void
}
export function Button({
  title,
  isDisabled,
  variant = 'primary',
  onClick
}: IButton) {
  return (
    <ButtonContainer variant={variant} onClick={onClick} disabled={isDisabled}>
      {title}
    </ButtonContainer>
  )
}
