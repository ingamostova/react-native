import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";

export const RegistrationScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocusLogin, setIsFocusLogin] = useState(false);
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View
          style={{ ...styles.form, marginBottom: isShowKeyboard ? -175 : 0 }}
        >
          <View
            style={{
              position: "absolute",
              alignItems: "center",
            }}
          >
            <TextInput style={styles.avatar}></TextInput>
            <TouchableOpacity style={styles.btnPlus} activeOpacity={0.8}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, width: "100%" }}>
            <Text style={styles.inputTitle}>Реєстрація</Text>
            <TextInput
              style={{
                ...styles.input,
                borderColor: isFocusLogin ? "#FF6C00" : "#F6F6F6",
                backgroundColor: isFocusLogin ? "#FFFFFF" : "#F6F6F6",
              }}
              onFocus={() => {
                setIsFocusLogin(true);
                setIsShowKeyboard(true);
              }}
              onBlur={() => setIsFocusLogin(false)}
              placeholderTextColor="#BDBDBD"
              placeholder="Логін"
            ></TextInput>
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
                secureTextEntry={true}
                onFocus={() => {
                  setIsFocusPassword(true);
                  setIsShowKeyboard(true);
                }}
                onBlur={() => setIsFocusPassword(false)}
                placeholderTextColor="#BDBDBD"
                placeholder="Пароль"
              ></TextInput>
              <Text style={styles.show}>Показати</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ ...styles.btn, marginTop: isShowKeyboard ? 50 : 0 }}
            >
              <Text style={styles.btnText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.link}>
              <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    // position: "relative",
  },
  form: {
    width: "100%",
    height: 549,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 78,
    paddingTop: 92,
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
  avatar: {
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  btnPlus: {
    position: "absolute",
    right: -72,
    bottom: -46,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    flex: 1,
    color: "#FF6C00",
    fontSize: 18,
  },
});
