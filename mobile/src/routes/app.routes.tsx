import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PlusCircle, SoccerBall } from 'phosphor-react-native'

import { New } from '../screens/New'
import { Pools } from '../screens/Polls'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="new" component={New} />
      <Screen name="pools" component={Pools} />
    </Navigator>
  )
}