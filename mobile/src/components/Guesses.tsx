import { useEffect, useState } from 'react';
import { Box, useToast } from 'native-base';

import { api } from '../services/api'

interface Props {
  poolId: string;
}

export function Guesses({ poolId }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [games, setGames] = useState([])

  const toast = useToast()

  async function fetchGames() {

    try {
      setIsLoading(true)

      const response = await api.get(`games/${poolId}/games`)
      setGames(response.data.games)

    } catch (error) {
      console.log('== error - fetchGames ==> ', error);
    
      toast.show({
        title: 'Unable to load games :-(',
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    fetchGames()
  }, [poolId])

  return (
    <Box>

    </Box>
  );
}
