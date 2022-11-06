import { Center, Text, Icon } from 'native-base'
import { Fontisto } from '@expo/vector-icons'

import { useAuth } from '../hooks/useAuth'

import { Button } from '../components/Button'
import LogoCup2022 from '../assets/logo.svg'

export function SignIn() {
  const { signIn, isUserLoading } = useAuth()  

  return (
    <Center flex={1} bg="gray.900" p={7}>
      <LogoCup2022 width={262} height={90} />
      <Button 
        type="SECONDARY"
        title="Login with Google" 
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />} 
        mt={12}
        onPress={signIn}
        isLoading={isUserLoading}
        _loading={{ _spinner: { color: 'white' } }}
      />
      <Text 
        color="white" 
        fontSize={14} 
        fontFamily="heading" 
        textAlign="center"
        mt={4}
      >
        We do not use any information other {'\n'}
         than your email to create your account.
      </Text>
    </Center>
  )
}