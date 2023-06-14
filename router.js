import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { SimpleLineIcons } from "@expo/vector-icons";
// import { Feather } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native";

import { RegistrationScreen } from "./Screens/auth-screens/RegistrationScreen";
import { LoginScreen } from "./Screens/auth-screens/LoginScreen";
// import { PostsScren } from "./Screens/main-screens/PostsScreen";
// import { CreatePostsScreen } from "./Screens/main-screens/CreatePostsScreen";
// import { ProfileScreen } from "./Screens/main-screens/ProfileScreen";
import { Home } from "./Screens/main-screens/Home";

const Stack = createStackNavigator();
// const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
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
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    );
  }
  //   return (
  //     <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
  //       <MainTab.Screen
  //         options={{
  //           headerRight: () => (
  //             <MaterialIcons
  //               name="logout"
  //               size={24}
  //               color="#BDBDBD"
  //               style={{ marginRight: 10 }}
  //             />
  //           ),
  //           tabBarIcon: ({ focused, size, color }) => (
  //             <SimpleLineIcons name="grid" size={size} color={color} />
  //           ),
  //           tabBarIconStyle: { marginTop: 17, marginRight: -50 },
  //         }}
  //         name="Posts"
  //         component={PostsScren}
  //       />
  //       <MainTab.Screen
  //         options={{
  //           headerRight: () => (
  //             <MaterialIcons
  //               name="logout"
  //               size={24}
  //               color="#BDBDBD"
  //               style={{ marginRight: 10 }}
  //             />
  //           ),
  //           tabBarIcon: ({ focused, size, color }) => (
  //             <AntDesign name="plus" size={size} color="#FFFFFF" />
  //           ),

  //           tabBarButton: (props) => (
  //             <TouchableOpacity
  //               {...props}
  //               activeOpacity={0.8}
  //               style={{
  //                 width: 70,
  //                 height: 40,
  //                 backgroundColor: "#FF6C00",
  //                 alignItems: "center",
  //                 justifyContent: "center",
  //                 borderRadius: 20,
  //                 marginTop: 9,
  //               }}
  //             />
  //           ),
  //         }}
  //         name="Create"
  //         component={CreatePostsScreen}
  //       />
  //       <MainTab.Screen
  //         options={{
  //           headerRight: () => (
  //             <MaterialIcons
  //               name="logout"
  //               size={24}
  //               color="#BDBDBD"
  //               style={{ marginRight: 10 }}
  //             />
  //           ),
  //           tabBarIcon: ({ focused, size, color }) => (
  //             <Feather name="user" size={30} color={color} />
  //           ),
  //           tabBarIconStyle: { marginTop: 17, marginLeft: -50 },
  //         }}
  //         name="Profile"
  //         component={ProfileScreen}
  //       />
  //     </MainTab.Navigator>
  //   );
};
