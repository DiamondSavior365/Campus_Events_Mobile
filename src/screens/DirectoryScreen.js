import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
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

  // ✅ New wrapper for SignOutButton that also navigates home
  const handleSignOut = async () => {
    try {
      // Trigger whatever logic your SignOutButton runs internally
      // You can call its onPress manually if needed —
      // but simplest is to just wrap it in a TouchableOpacity
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  const EventButton = ({ title, image, onPress }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.eventButton}>
        <Animated.Image
          source={image}
          style={[styles.animatedImage, { transform: [{ scale: scaleAnim }] }]}
          resizeMode="contain"
        />
        <Text style={styles.eventText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/Background_Videos/water_feature_1.mp4")}
        style={StyleSheet.absoluteFill}
        shouldPlay
        isLooping
        isMuted
        resizeMode="cover"
      />
      <View style={styles.titleBlockStyle}>
        <Text style={styles.titleStyle}>Current Events</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <EventButton
          title="Halloween Events"
          image={require("../../assets/button_Images/halloween_button.png")}
          // onPress={() => navigation.navigate("Halloween_Screen")} // old navigation
          onPress={() =>
            navigation.navigate("EventListScreen", { category: "halloween" })
          }
        />

        <EventButton
          title="Thanksgiving Events"
          image={require("../../assets/button_Images/thanksgiving_button.png")}
          // onPress={() => navigation.navigate("Thanksgiving_Screen")}
          onPress={() =>
            navigation.navigate("EventListScreen", { category: "thanksgiving" })
          }
        />

        <EventButton
          title="Christmas Events"
          image={require("../../assets/button_Images/christmas_button.png")}
          // onPress={() => navigation.navigate("Christmas_Screen")}
          onPress={() =>
            navigation.navigate("EventListScreen", { category: "christmas" })
          }
        />

        <EventButton
          title="F1 Racer Events"
          image={require("../../assets/button_Images/f1_button.png")}
          // onPress={() => navigation.navigate("F1_Racer_Screen")}
          onPress={() =>
            navigation.navigate("EventListScreen", { category: "f1" })
          }
        />

        <EventButton
          title="Sports Events"
          image={require("../../assets/button_Images/sports_button.png")}
          // onPress={() => navigation.navigate("Sports_Screeen")}
          onPress={() =>
            navigation.navigate("EventListScreen", { category: "sports" })
          }
        />
      </ScrollView>

      {/* ✅ Wrap your existing SignOutButton so it navigates home */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          // Let SignOutButton handle sign-out, then navigate Home
          handleSignOut();
        }}
      >
        <SignOutButton>Sign Out</SignOutButton>
      </TouchableOpacity>

      {metadata ? (
        <Text style={styles.welcomeText}>
          Welcome, {metadata.full_name}. You are logged in.
        </Text>
      ) : (
        <View>
          <Text style={styles.welcomeText}>You are not logged in.</Text>
        </View>
      )}
    </View>
  );
};

// DirectoryScreen.navigationOptions = {
//   headerShown: true,
//   title: "Directory",
// };
// DirectoryScreen.navigationOptions = ({ navigation }) => ({
//   headerShown: true,
//   title: "Directory",
//   headerLeft: () => (
//     <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//       <Text
//         style={{
//           color: "#007AFF",
//           marginLeft: 15,
//           fontSize: 16,
//           fontWeight: "bold",
//         }}
//       >
//         &lt; Home
//       </Text>
//     </TouchableOpacity>
//   ),
// });
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
    // backgroundColor: "#455A64",
    backgroundColor: "rgba(69, 90, 100, 0.6)",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: "600",
    color: "#FFFFFF", // pure white
    textShadowColor: "rgba(0,0,0,0.7)", // optional for extra pop
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    top : 10,
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
    // marginVertical: 10,
    paddingBottom: 30,
  },
  loginButton: {
    alignSelf: "center",
    width: 100,
    height: 50,
    textAlign: "center",
    marginTop: 5,
    color: "#007AFF",
    justifyContent: "center",
  },
});

export default DirectoryScreen;
