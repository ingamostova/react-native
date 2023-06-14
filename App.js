// import { StyleSheet, Text, View, ImageBackground } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";

import { useRoute } from "./router";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const routing = useRoute(null);

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
