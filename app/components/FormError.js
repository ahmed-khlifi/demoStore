import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function FormError({ children, isVisible }) {
  return isVisible ? <Text style={styles.error}>{children}</Text> : null;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

export default FormError;
