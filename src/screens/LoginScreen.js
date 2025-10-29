import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    // Placeholder for authentication logic.
  };
  const onSignUp = () => {
    // Placeholder for sign-up logic.
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleBlockStyle}>
        <Image 
        source={require("../../assets/login-icon.png")}
        style={styles.logoImage}
      />
        <Text style={styles.titleStyle}>Login</Text>
        <Text style={styles.subTitleStyle}>Welcone, Please sign in</Text>
      </View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        placeholder="Email"
        onChangeText={(newValue) => setEmail(newValue)}
      />

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        placeholder="Password"
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signUp}>Don't have an account? </Text>

      <View>
        <TouchableOpacity style={styles.button} onPress={onSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Directory_Screen")}>
        <Text style={styles.buttonText}>Continue as guest</Text>
      </TouchableOpacity>
      </View>


      <Text style={styles.output}>Your email is: {email}</Text>
      <Text style={styles.output}>Your email is: {password}</Text>
    </View>
  );
};

LoginScreen.navigationOptions = {
  headerShown: true, // Show the header
  title: "Events",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#2F362D",
    paddingBottom:"30%",
    },
  input: {
    height: 48,
    width: "95%",
    alignSelf: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  titleBlockStyle: {
    //backgroundColor: "#0382A5",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
    borderRadius: 24,
  },
  titleStyle: {
    fontSize: 34,
    color: "#fff",
    fontWeight: "600",
  },
  subTitleStyle: {
    marginTop: 8,
    //backgroundColor: "#0382A5",
    borderRadius: 4,
    paddingHorizontal: 15,
    color: "#fff",
    paddingVertical: 4,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#0382A5",
    width: "95%",
    paddingVertical: 14,
    borderRadius: 32,
    alignSelf: "center",
    alignItems: "left",
    marginTop: 8,
    marginBottom: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft:"5%",
  },
  signUp: {
    justifyContent: "center",
    color: "#fff",
    paddingLeft: "3%",
    paddingTop: 4,
    fontSize: 15,
  },
  guest: {
    color: "#fff",  
  },
  output: {
    color: "#ffd069ff",
    paddingTop: 4,
  }
});

export default LoginScreen;
