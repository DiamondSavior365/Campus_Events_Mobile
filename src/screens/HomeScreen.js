import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
<<<<<<< HEAD
=======
  // destructuring the props property to just get navigation
  // console.log(props);
>>>>>>> 0950a750b35a6f89e69cfcd29225508caab8c9d3
  return (
    <ImageBackground
      source={require("../../assets/background_one.png")}
      style={styles.background}
      resizeMode="cover"
    >
<<<<<<< HEAD
      <Text style={styles.text}>Campus Events</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Directory_Screen")}>
        <Text style={styles.button}>Press to Enter</Text>
      </TouchableOpacity>
=======
      <Text style={styles.text}>Campus Events!!</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Login_Screen")}>
        <Text style={styles.button}>Click to Enter</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.navigate("Directory_Screen")}>
        <Text style={styles.button}>Click to Enter</Text>
      </TouchableOpacity> */}
>>>>>>> 0950a750b35a6f89e69cfcd29225508caab8c9d3
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
<<<<<<< HEAD
    color: "white",
    position: "absolute",
    top: 120,
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "American Typewriter",
  },

  button: {
  fontSize: 45,
  color: "white",
  position: "absolute",
  bottom: -350,
  alignSelf: "center",
  borderRadius:55,
  paddingHorizontal: 24,
  paddingVertical: 8,

  // Liquid glass
  backgroundColor: "rgba(30, 157, 185, 0.40)", 
  borderWidth: 1,
  borderColor: "rgba(255, 255, 255, 0.55)", 
=======
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
    backgroundColor: "rgba(30, 157, 185, 0.55)",
    borderRadius: 25,
    paddingHorizontal: 24,
>>>>>>> 0950a750b35a6f89e69cfcd29225508caab8c9d3
  },
});

export default HomeScreen;
