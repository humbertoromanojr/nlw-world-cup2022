import { VStack, Heading } from 'native-base'

import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function Find() {
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
                    Find a bubble through {'\n'}
                    your unique code
                </Heading>

                <Input mb={2} placeholder='What is the bubble code?' />
                <Button title="Search pool" />

            </VStack>
        </VStack>
    )
}