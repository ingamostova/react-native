import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RegistrationScreen } from "./Screens/auth-screens/RegistrationScreen";
import { LoginScreen } from "./Screens/auth-screens/LoginScreen";
import { PostsScren } from "./Screens/main-screens/PostsScreen";
import { CreatePostsScreen } from "./Screens/main-screens/CreatePostsScreen";
import { ProfileScreen } from "./Screens/main-screens/ProfileScreen";

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

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
      </Stack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={
          {
            //   tabBarIcon: ((focused, size, color) => )
          }
        }
        name="Posts"
        component={PostsScren}
      />
      <MainTab.Screen name="Create" component={CreatePostsScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};
