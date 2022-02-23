import RadioButtonRN from "radio-buttons-react-native";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import FormError from "./FormError";

const data = [
  {
    label: "Male",
    accessibilityLabel: "male",
  },
  {
    label: "Female",
    accessibilityLabel: "female",
  },
];

function Radio({ name }) {
  const { setFieldValue, touched, setFieldTouched, errors } =
    useFormikContext();

  return (
    <View style={styles.radioField}>
      <RadioButtonRN
        box={false}
        style={{ flexDirection: "row", width: "100%" }}
        boxStyle={{ width: "30%", marginTop: 0 }}
        data={data}
        textStyle={{ marginLeft: 15, fontSize: 16, color: colors.black }}
        selectedBtn={(e) => setFieldValue("gender", e.accessibilityLabel)}
      />
      <FormError isVisible={true}>{errors[name]}</FormError>
    </View>
  );
}

const styles = StyleSheet.create({
  radioField: {
    width: "100%",
    marginVertical: 5,
  },
});

export default Radio;
