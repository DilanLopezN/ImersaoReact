import { MouseEventHandler } from 'react'
interface IButton {
  onClick: () => void
  title: string
}
import { Button } from '@chakra-ui/react'
export const ButtonContent = ({ onClick, title }: IButton) => {
  return (
    <Button
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
      onClick={onClick}
    >
      {title}
    </Button>
  )
}
