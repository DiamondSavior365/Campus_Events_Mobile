import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageDetail from "./Components/ImageDetail";

// This JS file shows a list with images

const F1_RacerScreen = () => {
  return (
    //This parent ImageScreen.js will pass title down to the child
    //component ImageDetail

    <ScrollView style={styles.container}>
      <ImageDetail
        title="Event_1"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={0}
      />
      <ImageDetail
        title="Event_2"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={0}
      />
      <ImageDetail
        title="Event_3"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={0}
      />
      <ImageDetail
        title="Event_4"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={0}
      />
      <ImageDetail
        title="Event_5"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={0}
      />
      <ImageDetail
        title="Event_6"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={0}
      />
      <ImageDetail
        title="Event_7"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={0}
      />
    </ScrollView>
  );
};

// Add navigation options **here, after the component**
F1_RacerScreen.navigationOptions = {
  headerShown: true, // Show the header
  title: "Events",
};

const styles = StyleSheet.create({});

export default F1_RacerScreen ;
