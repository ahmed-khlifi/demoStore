import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";
function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 2,
    marginVertical: 5,
    width: "100%",
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default Button;
