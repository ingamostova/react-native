import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";

export const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "flex-start",
              height: 300,
              paddingTop: 32,
            }}
          >
            <Image source={{ uri: item.photo }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.commentsContainer}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 6,
                  width: 24,
                }}
              >
                <Feather
                  name="message-circle"
                  size={24}
                  color="#BDBDBD"
                  onPress={() => navigation.navigate("Comments")}
                />
                <Text style={styles.number}>0</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <Feather
                  name="map-pin"
                  size={20}
                  color="#BDBDBD"
                  onPress={() => navigation.navigate("Map", { item })}
                />
                <Text style={styles.location}>{item.location}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
  commentsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
    color: "#212121",
    textDecorationLine: "underline",
  },
  number: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
    color: "#BDBDBD",
  },
});
