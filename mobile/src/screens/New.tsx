import { useState } from 'react'
import { VStack, Text, Heading, useToast } from 'native-base'

import { api } from '../services/api'

import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

import LogoCup2022 from '../assets/logo.svg'

export function New() {
    const [title, setTitle] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const toast = useToast()

    async function handlePoolCreate() {
        if (!title.trim()) {
            return toast.show({
                title: 'Give the title for your poll, please ;-p',
                placement: 'top',
                bgColor: 'red.500'
            })
        }

        try {
            setIsLoading(true)

            await api.post('/pools', { title })

            toast.show({
                title: 'Poll created successfully :-)',
                placement: 'top',
                bgColor: 'green.500'
            })
            
        } catch (error) {
            console.log('== error - handlePoolCreate ==> ', error);

            toast.show({
                title: 'Unable to create poll :-(',
                placement: 'top',
                bgColor: 'red.500'
            })

            setTitle('')
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <VStack flex={1} bg="gray.900">
            <Header title="Create new poll" />
            <VStack my={10} mx={5} alignItems="center">
                <LogoCup2022 />

                <Heading 
                    my={10} 
                    mx={30}
                    color="#ffffff" 
                    textAlign="center"
                    fontFamily="heading"
                    fontSize="xl"
                >
                    Create your own cup poll {'\n'} and share it with friends!
                </Heading>

                <Input 
                    mb={2} 
                    placeholder='What is your poll name?' 
                    onChangeText={setTitle}
                    value={title}
                />
                <Button title="create my poll" onPress={handlePoolCreate} />

                <Text color="gray.200" mt={4} textAlign="center" fontSize="md">
                    After creating your poll, you will receive a {'\n'}
                    unique code that you can use to invite {'\n'}
                    other people.
                </Text>
            </VStack>
        </VStack>
    )
}