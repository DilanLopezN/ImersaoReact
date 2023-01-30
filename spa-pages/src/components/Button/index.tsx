import React from 'react'
import { ButtonContainer } from './styles'

interface IButton {
  title: string
  variant?: string
  onClick?: () => void
}
export function Button({ title, variant = 'primary', onClick }: IButton) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}
