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
        title="Haunted Trail"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="Brave the eerie woods and encounter ghosts, ghouls, and surprises lurking behind every corner. Do you have what it takes to make it to the end?"
        count={9}
      />
      <ImageDetail
        title="Witch's Brew Cocktail Party"
        imageSource={require("../../assets/halloween_seal/seal_witch_brew_party_3.png")}
        info="Sip spooky-themed drinks, enjoy mystical music, and conjure up a good time with friends at this magical mixology night."
        count={7}
      />
      <ImageDetail
        title="Trick-or-Treak Movie Marathon"
        imageSource={require("../../assets/halloween_seal/seal_haloween_movie_marathon_1.png")}
        info="Settle in for a night of Halloween classics, candy galore, and cozy scares under the flickering glow of the big screen."
        count={10}
      />
      <ImageDetail
        title="Monster Masquerade Ball"
        imageSource={require("../../assets/halloween_seal/seal__masquerade_ball_1.png")}
        info="Dress to impress (and terrify!) at this elegant Halloween soirée featuring costumes, dancing, and a prize for the best disguise."
        count={10}
      />
      <ImageDetail
        title="Haunted Escape Room Night"
        imageSource={require("../../assets/halloween_seal/seal_haunted_escape_room_2.png")}
        info="Solve spooky puzzles and uncover the mystery before time runs out in this chilling escape room experience."
        count={10}
      />
      <ImageDetail
        title="Zombie Glow Walk"
        imageSource={require("../../assets/halloween_seal/seal_zombie_glow_walk_1.png")}
        info="Join the undead for a glowing nighttime walk through town—complete with eerie lights, music, and post-walk festivities."
        count={10}
      />
      <ImageDetail
        title="Pumpkin Palooza"
        imageSource={require("../../assets/halloween_seal/seal_pumpkin_palooza_2.png")}
        info="Celebrate the season with pumpkin carving, games, and autumn treats. A perfect event for families and Halloween lovers alike."
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
