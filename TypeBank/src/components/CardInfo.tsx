import { Box } from '@chakra-ui/react'
interface ICardInfo {
  text: string
}
export const CardInfo = ({ text }: ICardInfo) => {
  return (
    <Box
      backgroundColor="white"
      minHeight="120px"
      width={320}
      borderRadius="18px"
      textAlign="center"
    >
      <h1>Bem vindo!</h1>
      <p>{text}</p>
    </Box>
  )
}
