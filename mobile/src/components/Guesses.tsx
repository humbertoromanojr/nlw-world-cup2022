import { useEffect, useState } from 'react';
import { FlatList, useToast } from 'native-base';

import { api } from '../services/api'

import { Game, GameProps } from '../components/Game'
import { Loading } from './Loading';

interface Props {
  poolId: string;
}

export function Guesses({ poolId }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [games, setGames] = useState<GameProps[]>([])
  const [firstTeamPoints, setFirstTeamPoints] = useState('')
  const [secondTeamPoints, setSecondTeamPoints] = useState('')

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

  async function handleGuessConfirm(gameId: string) {

    try {
      if (!firstTeamPoints.trim() || !secondTeamPoints.trim()) {
        return toast.show({
          title: 'No scores have been reported. :-(',
          placement: 'top',
          bgColor: 'red.500'
        })
      }

      await api.post(`/pools/${poolId}/games/${gameId}/guesses`, {
        firstTeamPoints: Number(firstTeamPoints),
        secondTeamPoints: Number(secondTeamPoints),
      })
    
      toast.show({
        title: 'Guess sent successfully. :-)',
        placement: 'top',
        bgColor: 'green.500'
      })

      fetchGames()
    } catch (error) {
      console.log('== error - handleGuessConfirm ==> ', error);
    
      toast.show({
        title: 'Unable to submit guess :-(',
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
    
    }

  }

  useEffect(() => {
    fetchGames()
  }, [poolId])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <FlatList 
      data={games}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Game 
          data={item}
          setFirstTeamPoints={setFirstTeamPoints}
          setSecondTeamPoints={setSecondTeamPoints}
          onGuessConfirm={() => handleGuessConfirm(item.id)}
        />
      )}
    />
  );
}
