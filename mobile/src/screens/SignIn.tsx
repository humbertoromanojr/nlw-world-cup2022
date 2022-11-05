import { Center, Text, Icon } from 'native-base'
import { Fontisto } from '@expo/vector-icons'

import { Button } from '../components/Button'
import LogoCup2022 from '../assets/logo.svg'

export function SignIn() {
  return (
    <Center flex={1} bg="gray.900">
      <LogoCup2022 width={262} height={90} />
      <Text color="white" fontSize={24} fontFamily="heading">
        SignIn
      </Text>
      <Button 
        title="Entrar com Google" 
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />} 
      />
    </Center>
  )
}