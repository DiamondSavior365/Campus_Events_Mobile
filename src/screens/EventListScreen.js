import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageDetail from "./Components/ImageDetail";
import EventData from "./EventData"; // adjust the path to your EventData.js

const EventListScreen = ({ route }) => {
  const { category } = route.params; // e.g., "sports", "f1", "thanksgiving", etc.

  const events = EventData[category] || []; // fallback to empty array if category not found

  return (
    <ScrollView style={styles.container}>
      {events.map((event) => (
        <ImageDetail
          key={event.id}
          title={event.title}
          imageSource={event.imageLocal}
          info={`${event.description}\nDate: ${event.date}  Time: ${event.time}\nLocation: ${event.location}\nPrice: ${event.price}`}
          count={event.popularity}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#F5F5F5",
  },
});

export default EventListScreen;
