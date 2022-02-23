import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function CategoryItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icon} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: colors.black,
    fontSize: 18,
    textTransform: "capitalize",
  },
  icon: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
    marginRight: 20,
  },
});

export default CategoryItem;
