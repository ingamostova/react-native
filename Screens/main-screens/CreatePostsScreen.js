import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [post, setPost] = useState({});
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [coords, setCoords] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      const { statusLocation } =
        await Location.requestForegroundPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      const location = await Location.getCurrentPositionAsync();
      console.log("location", location);
      setPhoto(photo.uri);
      setCoords({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  };

  const sendPhoto = () => {
    navigation.navigate("DefaultScreen", { photo, name, location, coords });
  };

  const removePhoto = () => {
    setPhoto(null);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    // <View style={styles.container}>
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Camera style={styles.camera} type={type} ref={setCameraRef}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{
                  // height: 150,
                  width: "100%",
                  flex: 1,
                  borderRadius: 10,
                  // marginHorizontal: 10,
                }}
              />
            </View>
          )}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Feather name="refresh-cw" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
            <FontAwesome name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </Camera>
        <View style={styles.download}>
          <Text style={styles.downloadTitle}>Завантажте фото</Text>
        </View>
        <TextInput
          value={name}
          onChangeText={setName}
          onFocus={() => setIsShowKeyboard(true)}
          style={{ ...styles.input, marginBottom: 16 }}
          placeholder="Назва..."
        ></TextInput>
        <View style={styles.inputContainer}>
          <Feather name="map-pin" size={20} color="#BDBDBD" />
          <TextInput
            value={location}
            onChangeText={setLocation}
            onFocus={() => setIsShowKeyboard(true)}
            style={{ ...styles.input, flex: 1, marginHorizontal: 4 }}
            placeholder={"Місцевість..."}
          ></TextInput>
        </View>
        <View>
          <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
            <Text style={styles.sendLabel}>Опубліковати</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trash}>
            <Feather
              onPress={removePhoto}
              name="trash-2"
              size={24}
              color="#DADADA"
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  camera: {
    height: "40%",
    marginHorizontal: 10,
    marginTop: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  snap: {
    color: "#fff",
  },

  flipContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: 8,
    right: 8,
  },
  snapContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  takePhotoContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    zIndex: 100,
  },
  download: {
    marginTop: 8,
    marginLeft: 16,
    marginBottom: 32,
  },
  downloadTitle: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  sendBtn: {
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    height: 50,
    borderRadius: 100,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: {
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    marginHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 32,
  },
  trash: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 32,
  },
});
