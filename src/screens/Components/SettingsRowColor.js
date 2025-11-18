import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

export default function SettingsRowColor({
  title,
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={[styles.colorCircle, { backgroundColor: value }]}
        />
      </View>

      <Modal visible={open} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ColorPicker
              color={value}
              onColorChangeComplete={(c) => onChange(c)}
              thumbSize={30}
              sliderSize={30}
              noSnap={true}
              row={false}
            />
            <TouchableOpacity
              onPress={() => setOpen(false)}
              style={styles.closeButton}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
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

  colorCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#ccc",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    padding: 20,
  },

  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    height: 420,
  },

  closeButton: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
});
