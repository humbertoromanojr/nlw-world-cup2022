import { VStack, Text, Heading } from 'native-base'

import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

import LogoCup2022 from '../assets/logo.svg'

export function New() {
    return (
        <VStack flex={1} bg="gray.900">
            <Header title="Create new pool" />
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
                    Create your own cup pool {'\n'} and share it with friends!
                </Heading>

                <Input mb={2} placeholder='What is your bubble name?' />
                <Button title="create my pool" />

                <Text color="gray.200" mt={4} textAlign="center" fontSize="md">
                    After creating your pool, you will receive a {'\n'}
                    unique code that you can use to invite {'\n'}
                    other people.
                </Text>
            </VStack>
        </VStack>
    )
}