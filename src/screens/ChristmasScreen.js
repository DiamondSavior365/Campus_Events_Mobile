import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageDetail from "./Components/ImageDetail";

// This JS file shows a list with images

const ImageScreen = () => {
  return (
    //This parent ImageScreen.js will pass title down to the child
    //component ImageDetail

    <ScrollView style={styles.container}>
      <ImageDetail
        title="TBD"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={9}
      />
      <ImageDetail
        title="TBD"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={7}
      />
      <ImageDetail
        title="TBD"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={10}
      />
      <ImageDetail
        title="TBD"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={10}
      />
      <ImageDetail
        title="TBD"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={10}
      />
      <ImageDetail
        title="TBD"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={10}
      />
      <ImageDetail
        title="TBD"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="TBD"
        count={10}
      />
    </ScrollView>
  );
};

// Add navigation options **here, after the component**
ImageScreen.navigationOptions = {
  headerShown: true, // Show the header
  title: "Events",
};

const styles = StyleSheet.create({});

export default ImageScreen;
