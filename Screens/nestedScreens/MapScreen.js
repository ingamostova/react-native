import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ route }) => {
  console.log("route.params", route.params.item.coords);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: route.params.item.coords.latitude,
          longitude: route.params.item.coords.longitude,
          latitudeDelta: 0.05922,
          longitudeDelta: 0.05421,
        }}
      >
        <Marker
          title="I am here"
          coordinate={{
            latitude: route.params.item.coords.latitude,
            longitude: route.params.item.coords.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  map: {
    flex: 1,
  },
});
