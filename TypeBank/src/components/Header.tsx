import { StyledHeader } from '../styles/style.header'
import { useContext } from 'react'
import { AppContext } from '../App'
interface IHeader {
  title: string
}

export const Header = ({ title }: IHeader) => {
  const context = useContext(AppContext)
  console.log(context)
  return <StyledHeader>{title}</StyledHeader>
}
