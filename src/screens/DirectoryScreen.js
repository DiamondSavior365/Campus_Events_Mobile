import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const DirectoryScreen = ({ navigation }) => {
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
