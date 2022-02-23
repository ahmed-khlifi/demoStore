import React from "react";
import { useFormikContext } from "formik";

import FormError from "./FormError";
import Input from "./Input";

function InputField({ isVisible, errorMessage, name, ...other }) {
  const { handleChange, touched, setFieldTouched, errors } = useFormikContext();

  return (
    <>
      <Input
        {...other}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      <FormError isVisible={touched[name]}>{errors[name]}</FormError>
    </>
  );
}

export default InputField;
