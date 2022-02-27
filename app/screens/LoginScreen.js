import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import * as Yup from "yup";

import apiClient from "../api/auth";
import colors from "../config/colors";
import style from "../config/styles";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";
import Form from "../components/Form";
import FormError from "../components/FormError";
import authStorage from "../auth/storage";
import AuthContext from "../auth/authContext";
import useAuth from "../auth/useAuth";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const [error, setError] = useState(false);
  const { login } = useAuth();
  // login
  const handleSubmit = async ({ email, password }) => {
    const result = await apiClient.login(email, password);
    if (result.ok) {
      login(result.data);
    } else setError(true);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.header, style.header]}>Pestore</Text>
      <FormError isVisible={error.visible}>{error.message}</FormError>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormError isVisible={error}>Invalid email or password</FormError>
        <InputField placeholder="Username - Email" icon="user" name="email" />
        <InputField
          placeholder="password"
          icon="lock"
          name="password"
          isPassword
        />
        <FormButton title="Login" />
      </Form>

      <Text style={{ fontWeight: "bold", margin: 15 }}>
        Don't have an account ?
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{ color: colors.primary }}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: 20,
  },
});

export default LoginScreen;
