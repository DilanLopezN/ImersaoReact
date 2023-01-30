import styled, { css } from 'styled-components'
interface IButtonStyled {
  variant: string
}

export const ButtonContainer = styled.button<IButtonStyled>`
  background: #565656;
  border-radius: 12px;
  min-width: 120px;

  height: 33px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  cursor: pointer;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      min-width: 167px;
      height: 33px;
      width: 100%;
      background: #61dcfb;
      transition: all 0.2s;

      &&:hover {
        background: #0594cd;
      }
    `}
`
