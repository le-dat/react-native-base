import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TabScreens from "../src/components/partials/TabScreens"
import ItemScreen from "../src/screens/ItemScreen"

const Stack = createNativeStackNavigator()

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabScreens} options={{ headerShown: false }} />
      <Stack.Screen name="item" component={ItemScreen} />
    </Stack.Navigator>
  )
}

export default Routes
