import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/bg.png")}
        style={styles.bg}
      >
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </ImageBackground>

      {/* <Text>Hello world! it's Inga</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    // alignItems: "center",
    justifyContent: "center",
  },
});
