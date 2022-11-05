import { VStack, Icon } from "native-base"
import { Fontisto } from '@expo/vector-icons'

import { Header } from "../components/Header"
import { Button } from "../components/Button"

export function Pools() {
    return (
        <VStack flex={1} bgColor="gray.900">
          <Header title="My pools" />

          <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
            <Button 
              title="Find pool for code"  
              leftIcon={<Icon as={Fontisto} name="search" color="black" size="md" />}
            />
          </VStack>
        </VStack>
    )
}