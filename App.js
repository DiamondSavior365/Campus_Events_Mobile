import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ClubList from "./src/screens/ClubList";
import EventList from "./src/screens/EventList";
import HalloweenScreen from "./src/screens/HalloweenScreen";
import ThanksgivingScreen from "./src/screens/ThanksgivingScreen";
import ChristmasScreen from "./src/screens/ChristmasScreen";
import DirectoryScreen from "./src/screens/DirectoryScreen";
import F1_RacerScreen from "./src/screens/F1_RacerScreeen";
import LoginScreen from "./src/screens/LoginScreen";
import SportsScreeen from "./src/screens/SportsScreeen";
import SignUpScreen from "./src/screens/SignUpScreen";
import AuthProvider from "./src/lib/supabase/providers/AuthProvider";

const Stack = createStackNavigator();

function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "",
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Event_List"
          component={EventList}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Club_List"
          component={ClubList}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Directory_Screen"
          component={DirectoryScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Halloween_Screen"
          component={HalloweenScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Thanksgiving_Screen"
          component={ThanksgivingScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Christmas_Screen"
          component={ChristmasScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="F1_Racer_Screen"
          component={F1_RacerScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Login_Screen"
          component={LoginScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Sports_Screeen"
          component={SportsScreeen}
          options={{ headerShown: true }}
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
