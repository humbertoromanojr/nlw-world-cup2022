import { useState, useCallback } from "react"
import { VStack, Icon, useToast, FlatList } from "native-base"
import { Fontisto } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useFocusEffect } from '@react-navigation/native'

import { api } from '../services/api'

import { Header } from "../components/Header"
import { Button } from "../components/Button"
import { EmptyPoolList } from '../components/EmptyPoolList'
import { PoolCard, PoolCardProps } from '../components/PoolCard'
import { Loading } from '../components/Loading'

export function Pools() {
  const [isLoading, setIsLoading] = useState(true)
  const [pools, setPools] = useState<PoolCardProps[]>([])

  const { navigate } = useNavigation()
  const toast = useToast()

  async function fetchPools() {

    try {
      setIsLoading(true)
      const response = await api.get('/pools')
      setPools(response.data.pools)
    
      toast.show({
        title: 'Successfully load the polls :-)',
        placement: 'top',
        bgColor: 'green.500'
      })
    } catch (error) {
      console.log('', error);
    
      toast.show({
        title: 'Unable to load polls :-(',
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
      setIsLoading(false)
    }

  }

  useFocusEffect(useCallback(() => {
    fetchPools()
  }, []))

    return (
        <VStack flex={1} bgColor="gray.900">
          <Header title="My polls" />

          <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
            <Button 
              title="Find poll for code"  
              leftIcon={<Icon as={Fontisto} name="search" color="black" size="md" />}
              onPress={() => navigate("find")}
            />
          </VStack>

          {
            isLoading ? <Loading /> :
              <FlatList 
                data={pools}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <PoolCard data={item} />}
                showsVerticalScrollIndicator={false}
                _contentContainerStyle={{ pb: 10 }}
                ListEmptyComponent={() => <EmptyPoolList />}
                px={5}
              />
          }
        </VStack>
    )
}