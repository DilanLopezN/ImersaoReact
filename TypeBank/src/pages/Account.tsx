import { Center, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { CardInfo } from '../components/CardInfo'
import { api } from '../services/api'

interface IUserData {
  email: string
  password: string
  name: string
  balance: number
}

export default function Account() {
  const [userData, setUserData] = useState<null | IUserData>()

  useEffect(() => {
    const getData = async () => {
      const data: IUserData | any = await api
      setUserData(data)
    }
    getData()
  }, [])
  return (
    <Center>
      <SimpleGrid columns={2} spacing={2} paddingTop={16}>
        <CardInfo text="informações de acesso" />
        <CardInfo text="informações da conta" />
      </SimpleGrid>
    </Center>
  )
}
