import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import { CardInfo } from '../components/CardInfo'

export default function Account() {
  return (
    <Center>
      <SimpleGrid columns={2} spacing={2} paddingTop={16}>
        <CardInfo text="informações de acesso" />
        <CardInfo text="informações da conta" />
      </SimpleGrid>
    </Center>
  )
}
