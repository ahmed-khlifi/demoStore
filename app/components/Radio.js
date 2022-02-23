import React, { useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import { StyleSheet } from "react-native";

import colors from "../config/colors";

const radioButtonsData = [
  {
    id: "1", // acts as primary key, should be unique and non-empty string
    label: "Male",
    value: "male",
  },
  {
    id: "2",
    label: "Female",
    value: "female",
  },
];

export default function Radio() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <RadioGroup
      radioButtons={radioButtons}
      borderColor={colors.light}
      color={colors.primary}
      containerStyle={styles.radio}
      onPress={onPressRadioButton}
    />
  );
}

const styles = StyleSheet.create({
  radio: {
    flexDirection: "row",
    borderColor: colors.primary,
  },
});
