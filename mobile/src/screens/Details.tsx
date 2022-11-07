import { useEffect, useState } from "react";
import { Share } from 'react-native'
import { useToast, VStack } from "native-base";
import { useRoute } from '@react-navigation/native'

import { api } from '../services/api'

import { Option } from "../components/Option";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { PoolCardProps } from '../components/PoolCard'
import { PoolHeader } from "../components/PoolHeader";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";
import { Guesses } from "../components/Guesses";

interface RouteParams {
  id: string;
}

export function Details() { 
  const [isLoading, setIsLoading] = useState(false)
  const [optionSelected, setOptionSelected] = useState<'guesses' | 'ranking'>('guesses')
  const [poolDetails, setPollDetails] = useState<PoolCardProps>({} as PoolCardProps)

  const toast = useToast()
  const route = useRoute()
  const { id } = route.params as RouteParams

  async function fetchPoolDetails() {

    try {
      setIsLoading(true)
    
      const response = await api.get(`/pools/${id}`)
      setPollDetails(response.data.pool)

      toast.show({
        title: 'Successfully load the poll details ;-)',
        placement: 'top',
        bgColor: 'green.500'
      })
    } catch (error) {
      console.log('== error - fetchPoolDetails ==> ', error);

      toast.show({
        title: 'Unable to load poll details :-(',
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
      setIsLoading(false)
    }

  }

  async function handleCodeShare() {
    Share.share({
      message: poolDetails.code
    })
  }

  useEffect(() => {
    fetchPoolDetails()
  }, [id])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header 
      title={poolDetails.title} 
      showBackButton 
      showShareButton 
      onShare={handleCodeShare}
      />

      {
        poolDetails._count?.participants > 0 ?
        <VStack flex={1} px={5}>
          <PoolHeader data={poolDetails} />
          <VStack bgColor="gray.800" p={1} rounded="sm" mb={5}>
            <Option 
              title="Your guesses" 
              isSelected={optionSelected === 'guesses'} 
              onPress={() => setOptionSelected('guesses')}
            />
            <Option 
              title="Group ranking" 
              isSelected={optionSelected === 'ranking'} 
              onPress={() => setOptionSelected('ranking')}
            />
          </VStack>

          <Guesses poolId={poolDetails.id} />
        </VStack>
        : <EmptyMyPoolList code={poolDetails.code} />
      }
    </VStack>
  )
}