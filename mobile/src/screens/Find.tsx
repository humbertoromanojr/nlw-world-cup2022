import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { VStack, Heading, useToast } from 'native-base'

import { api } from '../services/api'

import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function Find() {
    const [isLoading, setIsLoading] = useState(false)
    const [code, setCode] = useState('')

    const toast = useToast()
    const { navigate } = useNavigation()

    async function handleJoinPool() {
        try {
            setIsLoading(true)

            if (!code.trim()) {
                return toast.show({
                    title: 'Inform the code ;-p',
                    placement: 'top',
                    bgColor: 'red.500'
                })  
            }  
            
            await api.post('/pools/join', { code })
            navigate('pools')
            
            toast.show({
                title: 'Successfully fond the poll :-)',
                placement: 'top',
                bgColor: 'green.500'
            })  
        } catch (error) {
            console.log('== error handleJoinPool ==> ', error);
            setIsLoading(false)

            if (error.response?.data?.message === 'Poll not found! :-(') {
                return toast.show({
                    title: 'Poll not found! :-(',
                    placement: 'top',
                    bgColor: 'red.500'
                }) 
            }

            if (error.response?.data?.message === 'You already this poll! :-)') {
                return toast.show({
                    title: 'You already this poll! :-)',
                    placement: 'top',
                    bgColor: 'red.500'
                }) 
            }
        
            toast.show({
                title: 'Could not find the poll :-(',
                placement: 'top',
                bgColor: 'red.500'
            }) 
        } 
    }

    return (
        <VStack flex={1} bg="gray.900">
            <Header title="Search by code" showBackButton />

            <VStack mt={8} mx={5} alignItems="center">

                <Heading 
                    mb={8} 
                    mx={30}
                    color="#ffffff" 
                    textAlign="center"
                    fontFamily="heading"
                    fontSize="2xl"
                >
                    Find a poll through {'\n'}
                    your unique code
                </Heading>

                <Input 
                    mb={2} 
                    placeholder='What is the poll code?' 
                    autoCapitalize='characters'
                    onChangeText={setCode}
                />
                <Button 
                    title="Search poll" 
                    isLoading={isLoading}
                    onPress={handleJoinPool}
                />

            </VStack>
        </VStack>
    )
}