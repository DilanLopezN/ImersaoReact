import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 8px;
  min-width: 120px;
  height: 33px;
  text-decoration: none;
  color: white;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      min-width: 167px;
      height: 33px;

      background: #e4105d;
    `}
`
