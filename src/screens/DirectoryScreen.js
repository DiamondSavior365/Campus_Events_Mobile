<<<<<<< HEAD
import React from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 0950a750b35a6f89e69cfcd29225508caab8c9d3
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
<<<<<<< HEAD

const DirectoryScreen = ({ navigation }) => {
=======
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

>>>>>>> 0950a750b35a6f89e69cfcd29225508caab8c9d3
  // destructuring the props property to just get navigation
  // console.log(props);
  return (
    <View>
      <View style={styles.titleBlockStyle}>
        <Text style={styles.titleStyle}>Your Directory</Text>
        <Text style={styles.subTitleStyle}>Dropdown for specific events </Text>
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
          <Text style={styles.button}>Go to Thanksgivng Screen</Text>
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
<<<<<<< HEAD
=======

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
>>>>>>> 0950a750b35a6f89e69cfcd29225508caab8c9d3
    </View>
  );
};

DirectoryScreen.navigationOptions = {
  headerShown: true, // Show the header
  title: "Events",
};

const styles = StyleSheet.create({
  titleBlockStyle: {
    backgroundColor: "#00aaff",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 34,
  },
  subTitleStyle: {
    top: 18,
    backgroundColor: "gray",
    borderRadius: 11,
    paddingHorizontal: 10,
  },
});
export default DirectoryScreen;
