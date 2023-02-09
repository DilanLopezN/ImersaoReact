import { StyledHeader } from '../styles/style.header'

interface IHeader {
  title: string
}

export const Header = ({ title }: IHeader) => {
  return <StyledHeader>{title}</StyledHeader>
}
