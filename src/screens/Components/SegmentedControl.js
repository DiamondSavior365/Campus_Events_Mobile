import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SegmentedControl({
  options = [],
  value,
  onChange,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      {options.map((option, index) => {
        const isSelected = value === option;

        return (
          <TouchableOpacity
            key={option}
            onPress={() => onChange(option)}
            style={[styles.option, isSelected && styles.selectedOption]}
            activeOpacity={0.7}
          >
            <Text style={[styles.text, isSelected && styles.selectedText]}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
    borderRadius: 12,
    padding: 4,
    alignItems: "center",
  },

  option: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: 10,
  },

  selectedOption: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  text: {
    fontSize: 16,
    color: "#888",
  },

  selectedText: {
    color: "#000",
    fontWeight: "500",
  }
});
