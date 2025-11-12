import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useAuthContext } from "../lib/supabase/hooks/useAuthContext";
import SignOutButton from "../lib/supabase/components/SignOutButton";

const DirectoryScreen = ({ navigation }) => {
  const [metadata, setMetadata] = useState(null);
  const { session } = useAuthContext();

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,     
          duration: 4500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,    
          duration: 4500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  useEffect(() => {
    if (session?.user) {
      setMetadata(session.user.user_metadata);
    } else {
      setMetadata(null);
    }
  }, [session]);

  const EventButton = ({ title, image, onPress }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.eventButton}>
        <Animated.Image
          source={image}
          style={[
            styles.animatedImage, 
            { transform: [{ scale: scaleAnim }] },
          ]}
          resizeMode="contain"
        />
        <Text style={styles.eventText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleBlockStyle}>
        <Text style={styles.titleStyle}>Current Events</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <EventButton
          title="Halloween Events"
          image={require("../../assets/button_Images/halloween_button.png")}
          onPress={() => navigation.navigate("Halloween_Screen")}
        />

        <EventButton
          title="Thanksgiving Events"
          image={require("../../assets/button_Images/thanksgiving_button.png")}
          onPress={() => navigation.navigate("Thanksgiving_Screen")}
        />

        <EventButton
          title="Christmas Events"
          image={require("../../assets/button_Images/christmas_button.png")}
          onPress={() => navigation.navigate("Christmas_Screen")}
        />

        <EventButton
          title="F1 Racer Events"
          image={require("../../assets/button_Images/f1_button.png")}
          onPress={() => navigation.navigate("F1_Racer_Screen")}
        />

        <EventButton
          title="Sports Events"
          image={require("../../assets/button_Images/sports_button.png")}
          onPress={() => navigation.navigate("Sports_Screeen")}
        />
      </ScrollView>

      <SignOutButton>Sign Out</SignOutButton>

      {metadata ? (
        <Text style={styles.welcomeText}>
          Welcome, {metadata.full_name}. You are logged in.
        </Text>
      ) : (
        <View>
          <Text>You are not logged in.</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login_Screen")}>
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

DirectoryScreen.navigationOptions = {
  headerShown: true,
  title: "Events",
};

const styles = StyleSheet.create({
  animatedImage: {
    position: "absolute",
    width: "120%",     
    height: "120%",
    top: "-10%",       
    left: "-10%",
    opacity: 0.95,
    borderRadius: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  titleBlockStyle: {
    backgroundColor: "#455A64",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: "600",
    color: "#E8E8E8",
  },
  scrollContainer: {
    paddingVertical: 20,
    alignItems: "center",
    gap: 15,
  },
  eventButton: {
    width: 380,
    height: 150,
    justifyContent: "center",
    outlineColor: "black",
    outlineStyle: "solid",
    outlineWidth: 2,
    alignItems: "center",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  eventImage: {
    borderRadius: 16,
    opacity: 0.95,
    resizeMode: "contain",
  },
  eventText: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  welcomeText: {
    textAlign: "center",
    marginVertical: 10,
  },
  loginButton: {
    allignSelf: "center",
    width: 100,
    height: 50,
    textAlign: "center",
    marginTop: 5,
    color: "#007AFF",
  },
});

export default DirectoryScreen;
