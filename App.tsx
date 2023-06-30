import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import Routes from "./routes"

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
