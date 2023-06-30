import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "@rneui/themed"
import React from "react"
import { Text } from "react-native"

import HomeScreen from "../../screens/HomeScreen"
import SettingScreen from "../../screens/SettingScreen"

const Tab = createBottomTabNavigator()

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: () => <Icon name="home" color="#517fa4" />,
          tabBarBadge: 2,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{ tabBarIcon: () => <Text>🤴</Text>, tabBarBadge: 2 }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation
