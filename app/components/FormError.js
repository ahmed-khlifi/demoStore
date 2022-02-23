import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function FormError({ children, isVisible, style }) {
  return isVisible ? (
    <Text style={[styles.error, style]}>{children}</Text>
  ) : null;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

export default FormError;
