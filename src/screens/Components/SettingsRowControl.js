import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SegmentedControl from "./SegmentedControl";

export default function SettingsRowControl({
  title,
  options,
  value,
  onChange,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.controlContainer}>
        <SegmentedControl
          options={options}
          value={value}
          onChange={onChange}
          style={{ minWidth: 180 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
  },

  textContainer: {
    flex: 1,
    paddingRight: 14,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  controlContainer: {
    flexShrink: 0,
  },
});
