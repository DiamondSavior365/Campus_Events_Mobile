import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageDetail from "./Components/ImageDetail";

// This JS file shows a list with images

const SportsScreeen = () => {
  return (
    //This parent ImageScreen.js will pass title down to the child
    //component ImageDetail

    <ScrollView style={styles.container}>
      <ImageDetail
        title="Archery: Seal the Target"
        imageSource={require("../../assets/SportsSeal/archery.png")}
        info="Join us for the ultimate precision competition. Focus, aim, and release in order to hit the bullseye and win a prize!"
        count={76}
      />
      <ImageDetail
        title="Baseball: Fastball Frenzy"
        imageSource={require("../../assets/SportsSeal/baseball.png")}
        info="Get into teams and compete in the ultimate baseball game. Players will slide accross slippery bases and hit home runs!"
        count={272}
      />
      <ImageDetail
        title="Basketball: The Seal Slam"
        imageSource={require("../../assets/SportsSeal/basketball.png")}
        info="Grab your balls! And get ready to dunk and rule the court in this basketball showdown!"
        count={101}
      />
      <ImageDetail
        title="Football: The Seal Bowl"
        imageSource={require("../../assets/SportsSeal/football.png")}
        info="Get together and tackle your opponents in order to stop your opponent from getting a score. Its a 67th national Seal Bowl! "
        count={999}
      />
      <ImageDetail
        title="Hockey: Puck Splashdown"
        imageSource={require("../../assets/SportsSeal/hockey.png")}
        info="Skate accross the frozen arena and maneuver around the slippery ground!"
        count={96}
      />
      <ImageDetail
        title="Soccer: Seal Strikers"
        imageSource={require("../../assets/SportsSeal/soccer.png")}
        info="Get ready to dodge players and score a goal in this fun arena!"
        count={500}
      />
      <ImageDetail
        title="Swimming: Seal Surfers"
        imageSource={require("../../assets/SportsSeal/swim.png")}
        info="Swim accross the giant pool of H2O!"
        count={123}
      />
    </ScrollView>
  );
};

// Add navigation options **here, after the component**
// SportsScreeen.navigationOptions = {
//   headerShown: true, // Show the header
//   title: "Events",
// };

const styles = StyleSheet.create({});

export default SportsScreeen;
