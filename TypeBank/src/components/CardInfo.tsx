import { Box, Text } from '@chakra-ui/react'
interface ICardInfo {
  textTitle: string
  textContent: string | number
}
export const CardInfo = ({ textTitle, textContent }: ICardInfo) => {
  return (
    <Box
      backgroundColor="white"
      minHeight="120px"
      width={320}
      borderRadius="18px"
      textAlign="center"
    >
      <Text fontSize="2xl" fontWeight="bold">
        {textTitle}
      </Text>
      <Text fontSize="xl">{textContent}</Text>
    </Box>
  )
}
