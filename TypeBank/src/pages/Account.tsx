import { Center, SimpleGrid, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CardInfo } from '../components/CardInfo'
import { api } from '../services/api'

interface IUserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

export default function Account() {
  const [userData, setUserData] = useState<null | IUserData>()

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const data: IUserData | any = await api
      setUserData(data)
    }
    getData()
  }, [])

  if (userData && id !== userData.id) {
    navigate('/')
  }

  const actualData = new Date()

  return (
    <Center>
      <SimpleGrid columns={2} spacing={2} paddingTop={16}>
        {!userData ? (
          <>
            <Center>
              <Spinner size="lg" color="blue" />
            </Center>
          </>
        ) : (
          <>
            <CardInfo
              textTitle={`Bem vindo ${userData?.name}`}
              textContent={`${actualData.getDate()} / ${actualData.getMonth()} / ${actualData.getFullYear()}`}
            />
            <CardInfo
              textTitle="Saldo"
              textContent={userData?.balance.toFixed(2)}
            />
          </>
        )}
      </SimpleGrid>
    </Center>
  )
}
