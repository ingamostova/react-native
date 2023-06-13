// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";

import { useRoute } from "./router";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const routing = useRoute({});

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View style={styles.container}>
    //   <ImageBackground
    //     source={require("./assets/images/bg.png")}
    //     style={styles.bg}
    //   >
    <NavigationContainer>
      {routing}
      {/* <MainTab.Navigator>
        <MainTab.Screen name="Posts" component={PostsScren} />
        <MainTab.Screen name="Create" component={CreatePostsScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen} />
      </MainTab.Navigator>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
    // {/* </ImageBackground>
    // </View> */}
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   bg: {
//     flex: 1,
//     resizeMode: "cover",
//     // alignItems: "center",
//     justifyContent: "center",
//   },
// });
