import { Image, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DirectoryScreen from "./src/screens/DirectoryScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import AuthProvider from "./src/lib/supabase/providers/AuthProvider";
import EventListScreen from "./src/screens/EventListScreen";

const Stack = createStackNavigator();

function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerTitle: "Campus Events",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              left: 70,
            },
            headerStyle: {
              backgroundColor: "#007AFF",
            },
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginRight: 12,
                }}
              />
            ),
        }}

      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options = {{ headerShown: false }}
          />
        <Stack.Screen
          name="Directory_Screen"
          component={DirectoryScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="EventListScreen"
          component={EventListScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Login_Screen"
          component={LoginScreen}
          options={{ headerShown: true, headerTransparent: true }}
        />
        <Stack.Screen
          name="Sign_Up_Screen"
          component={SignUpScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RootApp />
    </AuthProvider>
  );
}
