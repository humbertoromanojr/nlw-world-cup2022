import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PlusCircle, SoccerBall } from 'phosphor-react-native'
import { useTheme } from 'native-base'

import { New } from '../screens/New'
import { Pools } from '../screens/Polls'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  const { colors, sizes } = useTheme()

  return (
    <Navigator screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: colors.yellow[500],
      tabBarInactiveTintColor: colors.gray[300], 
      tabBarStyle: {
        position: 'absolute',
        height: sizes[22],
        borderTopWidth: 0
      }
    }}>
      <Screen 
        name="new" 
        component={New} 
        options={{ tabBarIcon: ({ color }) => <PlusCircle color={color} />}}
      />
      <Screen 
        name="pools" 
        component={Pools} 
        options={{ tabBarIcon: ({ color }) => <SoccerBall color={color} />}}
      />
    </Navigator>
  )
}