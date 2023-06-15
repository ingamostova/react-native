import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onLogin = () => {
    console.log({
      email,
      password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* <View style={styles.containerBig}> */}
        <ImageBackground
          source={require("../../assets/images/bg.png")}
          style={styles.bg}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? -235 : 0,
            }}
          >
            <View style={{ flex: 1, width: "100%" }}>
              <Text style={styles.inputTitle}>Увійти</Text>

              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isFocusEmail ? "#FF6C00" : "#F6F6F6",
                  backgroundColor: isFocusEmail ? "#FFFFFF" : "#F6F6F6",
                }}
                onFocus={() => {
                  setIsFocusEmail(true);
                  setIsShowKeyboard(true);
                }}
                onBlur={() => setIsFocusEmail(false)}
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#BDBDBD"
                placeholder="Адреса електронної пошти"
              ></TextInput>
              <View style={{ position: "relative", paddingBottom: 27 }}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocusPassword ? "#FF6C00" : "#F6F6F6",
                    backgroundColor: isFocusPassword ? "#FFFFFF" : "#F6F6F6",
                  }}
                  secureTextEntry={!showPassword}
                  onFocus={() => {
                    setIsFocusPassword(true);
                    setIsShowKeyboard(true);
                  }}
                  onBlur={() => setIsFocusPassword(false)}
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor="#BDBDBD"
                  placeholder="Пароль"
                ></TextInput>
                <Text
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.show}
                >
                  {showPassword ? "Приховати" : "Показати"}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...styles.btn, marginTop: isShowKeyboard ? 50 : 0 }}
                onPress={onLogin}
              >
                <Text style={styles.btnText}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} style={styles.link}>
                <Text
                  onPress={() => navigation.navigate("Registration")}
                  style={styles.linkText}
                >
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        {/* </View> */}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  // containerBig: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  // },
  bg: {
    flex: 1,
    resizeMode: "cover",
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  form: {
    width: "100%",
    height: 489,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 78,
    paddingTop: 32,
    position: "relative",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 6,
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#F6F6F6",
    borderRadius: 8,
    height: 50,
    padding: 16,
    marginBottom: 16,
  },
  inputTitle: {
    color: "#212121",
    marginBottom: 10,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 32,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  link: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  linkText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  show: {
    position: "absolute",
    right: 16,
    top: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
