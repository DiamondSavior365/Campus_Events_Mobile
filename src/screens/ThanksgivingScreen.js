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
        title="Community Potluck Dinner"
        imageSource={require("../../assets/thanksgiving_seal/potluck_seal.png")}
        info="Bring your favorite Thanksgiving dish and share a meal with neighbors and friends in a festive, welcoming setting."
        count={74}
      />
      <ImageDetail
        title="Turkey Trot Fun Run"
        imageSource={require("../../assets/thanksgiving_seal/fun_run_seals.png")}
        info="Start the day with a healthy 5K or 1-mile walk/run—costumes encouraged and all ages welcome!"
        count={29}
      />
      <ImageDetail
        title="Thanksgiving Craft Fair"
        imageSource={require("../../assets/thanksgiving_seal/craft_fair_seal.png")}
        info="Shop handmade gifts, fall décor, and local goods while supporting small businesses and artisans."
        count={56}
      />
      <ImageDetail
        title="Pumpkin Pie Bake-Off"
        imageSource={require("../../assets/thanksgiving_seal/bake_off_seal.png")}
        info="Bakers compete to create the tastiest pie—come taste the entries and vote for your favorite!"
        count={37}
      />
      <ImageDetail
        title="Gratitude Tree Activity"
        imageSource={require("../../assets/thanksgiving_seal/gratitude_tree_seal.png")}
        info="Write what you’re thankful for on a leaf and hang it on the community tree to spread positivity and reflection."
        count={48}
      />
      <ImageDetail
        title="Family Game & Movie Night"
        imageSource={require("../../assets/thanksgiving_seal/family_night_seals.png")}
        info="Cozy up with board games and a Thanksgiving-themed movie perfect for all ages—popcorn and cider provided."
        count={58}
      />
      <ImageDetail
        title="Food Drive & Volunteer Day"
        imageSource={require("../../assets/thanksgiving_seal/food_drive_seals.png")}
        info="Give back by donating canned goods or volunteering to pack Thanksgiving meals for families in need."
        count={82}
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
