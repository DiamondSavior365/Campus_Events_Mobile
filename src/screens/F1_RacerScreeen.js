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
        title="Seal Speed Circuit"
        imageSource={require("../../assets/F1_seal/Formula 1.png")}
        info="Join us for the annual seal grand prix racing event! Watch daring drivers zoom in Formula 1 race cars, all competing for the legendary golden fish!"
        count={67}
      />
      <ImageDetail
        title="Seal Scramble 6000"
        imageSource={require("../../assets/F1_seal/seal in a dirt bike 2.png")}
        info="Join the muddy madness as we race, tumble, and flip all while riding dirt bikes!"
        count={20}
      />
      <ImageDetail
        title="Monster Truck Mayhem"
        imageSource={require("../../assets/F1_seal/seal going ah 2.png")}
        info="Take the wheel of a monster truck and ride around in this epic arena of chaos! Watch them crush, crash, and flip over obstacles."
        count={31}
      />
      <ImageDetail
        title="Seal Support Squad"
        imageSource={require("../../assets/F1_seal/dmv seal 2.png")}
        info="Nervous about your driving test? Join our seal squad to do practice runs and be confident hitting the road!"
        count={7}
      />
      <ImageDetail
        title="Tokyo Street Racing"
        imageSource={require("../../assets/F1_seal/seal street race 2.png")}
        info="The streets are alive with speed! Take on Tokyo's toughest routes in this neon lit race track. Watch racers drift, dash, and zoom toward the finish line!"
        count={27}
      />
      <ImageDetail
        title="FlipperDome Fury"
        imageSource={require("../../assets/F1_seal/cool seal 2.png")}
        info="Enter the steel sphere of chaos! Watch stunt riders race inside the cage going in loops and doing cool tricks! "
        count={51}
      />
      <ImageDetail
        title="SealStyle Showoff"
        imageSource={require("../../assets/F1_seal/super cool seal 2.png")}
        info="Watch driver perform outrageous vehicle tricks and stunts! Who will pull of the coolest trick?"
        count={95}
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
