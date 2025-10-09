import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  // destructuring the props property to just get navigation
  // console.log(props);
  return (
    <ImageBackground
      source={require("../../assets/background_one.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.text}>Campus Events!!</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Event_List")}>
        <Text style={styles.button}>Click to Enter</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#00aaff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    color: "white", // ensures text is visible on darker images
    position: "absolute",
    top: 120,
    alignSelf: "center",
  },
  button: {
    fontSize: 45,
    color: "white", // ensures text is visible on darker images
    position: "absolute",
    bottom: -350,
    alignSelf: "center",
    backgroundColor: "#1E9DB9",
    borderRadius: 25,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
