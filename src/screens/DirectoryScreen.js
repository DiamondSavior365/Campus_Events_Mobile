import React, { useState, useEffect } from "react";
import {
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

	// fetching user's metadata from their profile
	useEffect(() => {
		if (session?.user) {
      setMetadata(session.user.user_metadata);
    } else {
      // If there is no session, clear the metadata
      setMetadata(null);
    }
	}, [session]);

  // destructuring the props property to just get navigation
  // console.log(props);
  return (
    <View>
      <View style={styles.titleBlockStyle}>
        <Text style={styles.titleStyle}>Current Events</Text>
        <Text style={styles.subTitleStyle}>Check out more events here! </Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingVertical: 10, gap: 10 }}>

        <TouchableOpacity
          onPress={() => navigation.navigate("Halloween_Screen")}
        >
          <Text style={styles.button}>Go to Halloween Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Thanksgiving_Screen")}
        >
          <Text style={styles.button}>Go to Thanksgiving Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Christmas_Screen")}
        >
          <Text style={styles.button}>Go to Christmas Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("F1_Racer_Screen")}
        >
          <Text style={styles.button}>Go to F1 Racer Screen</Text>
        </TouchableOpacity>
      </ScrollView>

			<SignOutButton>Sign Out</SignOutButton>

			{metadata != null ? (
				<Text>Welcome, {metadata.full_name}. You are logged in.</Text>
			) : (
				<View>
					<Text>You are not logged in.</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Login_Screen")}>
						<Text styles={styles.button}>Login</Text>
					</TouchableOpacity>
				</View>
			)}
    </View>
  );
};

DirectoryScreen.navigationOptions = {
  headerShown: true, // Show the header
  title: "Events",
};
const styles = StyleSheet.create({
  titleBlockStyle: {
    backgroundColor: "#4b5d54",
    textShadowColor: "#eae5d9",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 50,
    fontFamily: 'serif',
    color: "#eae5d9",
  },
  subTitleStyle: {
    top: 18,
    fontFamily: 'serif',
    backgroundColor: "#eae5d9",
    borderRadius: 11,
    paddingHorizontal: 10,
  },
  button: {
    fontSize: 45,
    color: "white",
    alignSelf: "center",
    backgroundColor: "#1E9D89",
    borderRadius: 25,
    paddingHorizontal: 5,
    marginBottom: 105,
    opacity: 0.7,

  }
});
export default DirectoryScreen;
