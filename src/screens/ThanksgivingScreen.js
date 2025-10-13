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
        title="Winter Wonderland Gala"
        imageSource={require("../../assets/halloween_seal/seal_haunted_trail_1.png")}
        info="Step into a magical evening of snow-kissed elegance, twinkling lights, and holiday cheer."
        count={74}
      />
      <ImageDetail
        title="Jingle & Mingle"
        imageSource={require("../../assets/halloween_seal/seal_witch_brew_party_3.png")}
        info="Mix, mingle, and jingle all the way at this lively holiday social full of music, laughter, and festive fun."
        count={29}
      />
      <ImageDetail
        title="The Santa Social"
        imageSource={require("../../assets/halloween_seal/seal_haloween_movie_marathon_1.png")}
        info="A cheerful gathering where Santa makes an appearance, perfect for photos, treats, and merry memories."
        count={56}
      />
      <ImageDetail
        title="Christmas at the Cabin"
        imageSource={require("../../assets/halloween_seal/seal__masquerade_ball_1.png")}
        info="Cozy up by the (virtual or real) fire for a rustic, warm celebration with hot cocoa, games, and classic holiday charm."
        count={37}
      />
      <ImageDetail
        title="Holly Jolly Festival"
        imageSource={require("../../assets/halloween_seal/seal_haunted_escape_room_2.png")}
        info="A fun-filled event packed with activities, treats, and jolly surprises for guests of all ages."
        count={48}
      />
      <ImageDetail
        title="Tinsel Town Bash"
        imageSource={require("../../assets/halloween_seal/seal_zombie_glow_walk_1.png")}
        info="Glam it up Hollywood-style with glittering décor, festive cocktails, and a red carpet entrance to remember."
        count={58}
      />
      <ImageDetail
        title="Miracle on Kellogg Drive"
        imageSource={require("../../assets/halloween_seal/seal_pumpkin_palooza_2.png")}
        info="Celebrate the spirit of the season with a magical neighborhood or community gathering inspired by timeless holiday miracles."
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
