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
        title="Holiday Market & Hot Cocoa Bar"
        imageSource={require("../../assets/christmas_seal/market_place_seal1.png")}
        info="Sip, Snack, and Enjoy the Whimsy of the Lively Spirit!"
        count={123}
      />
      <ImageDetail
        title="Christmas karaoke"
        imageSource={require("../../assets/christmas_seal/christmas_karaoke1.png")}
        info="Chime Alongside the Sleigh bells! -- One Song at a Time"
        count={224}
      />
      <ImageDetail
        title="Candle-Making Workshop"
        imageSource={require("../../assets/christmas_seal/candlemaking_seals1.png")}
        info="Light Up the Holidays! -- Literally"
        count={89}
      />
      <ImageDetail
        title="Gingerbread House Contest"
        imageSource={require("../../assets/christmas_seal/gingerbread_seals1.png")}
        info="Build it, Break it, Make it Better!"
        count={137}
      />
      <ImageDetail
        title="Ornament Dodgeball"
        imageSource={require("../../assets/christmas_seal/dodgeball_seals1.png")}
        info="Duck, Dodge, & Deck the Halls!"
        count={159}
      />
      <ImageDetail
        title="Secret Santa Gift Exchange"
        imageSource={require("../../assets/christmas_seal/secret_santa_seals1.png")}
        info="Give a Little, Laugh A Lot!"
        count={329}
      />
      <ImageDetail
        title="Krampus Escape Room"
        imageSource={require("../../assets/christmas_seal/escape_room_seals1.png")}
        info="Escape Krampus, Solve Puzzles and Sleigh the Game!"
        count={284}
      />
    </ScrollView>
  );
};

// Add navigation options **here, after the component**
// ImageScreen.navigationOptions = {
//   headerShown: true, // Show the header
//   title: "Events",
// };

const styles = StyleSheet.create({});

export default ImageScreen;
