import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(newValue) => setEmail(newValue)}
      />

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Directory_Screen")}>
        <Text style={styles.guest}>Continue as guest</Text>
      </TouchableOpacity>

      <Text>Your email is: {email}</Text>
      <Text>Your email is: {password}</Text>
    </View>
  );
};

LoginScreen.navigationOptions = {
  headerShown: true, // Show the header
  title: "Events",
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  guest: {
    color: "blue",
  },
});

export default LoginScreen;
