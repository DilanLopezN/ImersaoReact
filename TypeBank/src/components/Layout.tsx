import { Header } from './Header'
import { StyledLayout } from '../styles/style.layout'

export const Layout = ({ children }: any) => {
  return (
    <>
      <StyledLayout>
        <Header title="Typebank" />
        {children}
      </StyledLayout>
    </>
  )
}
