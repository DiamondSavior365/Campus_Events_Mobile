import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const events = [
    { name: "Event Name #1", age: "20" },
    { name: "Event Name #2", age: "21" },
    { name: "Event Name #3", age: "21" },
    { name: "Event Name #4", age: "21" },
    { name: "Event Name #5", age: "21" },
    { name: "Event Name #6", age: "21" },
    { name: "Event Name #7", age: "21" },
    { name: "Event Name #8", age: "21" },
    { name: "Event Name #9", age: "21" },

    // adding keys method 1
    // const clubs = [
    //   { name: "friend #1", key: "1" },
    //   { name: "friend #2", key: "2" },
    //   { name: "friend #3", key: "3" },
    //   { name: "friend #4", key: "4" },
    //   { name: "friend #5", key: "5" },
    // ];
  ];

  return (
    <FlatList
      // horizontal //Allows for a horizontal list
      // showsHorizontalScrollIndicator={false}
      data={events} // contains the array of objects
      keyExtractor={(event) => event.name} //method 2 of adding a key prop
      renderItem={({ item }) => {
        // destructuring single item property
        return <Text style={styles.textStyle}>{item.name} </Text>;
      }}
    />
  );
};
// Add navigation options **here, after the component**
ListScreen.navigationOptions = {
  headerShown: true, // Show the header
  title: "Events",
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    fontSize: 25,
  },
});

export default ListScreen;
