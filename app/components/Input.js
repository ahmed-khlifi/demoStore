import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

function Input({
  placeholder,
  icon,
  isPassword = false,
  onPress,
  style,
  ...other
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <FontAwesome
          name={icon}
          size={24}
          color="lightgrey"
          style={styles.icon}
        />
        <TextInput
          {...other}
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={isPassword}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    width: "100%",
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 2,
    marginVertical: 5,
  },
  input: {
    width: "100%",
    fontSize: 16,
  },
  icon: { paddingRight: 10 },
});

export default Input;
