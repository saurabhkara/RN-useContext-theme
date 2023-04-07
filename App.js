import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screeens/MainScreen";
import Second from "./screeens/Second";
import ThirdScreen from './screeens/ThirdScreen'
import { ContextWrapper } from "./context/themeContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContextWrapper>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { elevation: 0 },
            cardStyle: { backgroundColor: "black" },
            headerShown: false,
          }}
        >
          <Stack.Screen name="third" component={ThirdScreen} />
          <Stack.Screen name="main" component={MainScreen} />
          <Stack.Screen name="second" component={Second} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
