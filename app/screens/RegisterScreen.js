import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import Form from "../components/Form";
import FormButton from "../components/FormButton";
import InputField from "../components/InputField";
import Radio from "../components/Radio";
import colors from "../config/colors";
import style from "../config/styles";
import apiClient from "../api/user";

function RegisterScreen({ navigation }) {
  const initialValues = {
    displayName: "",
    username: "",
    email: "",
    password: "",
    rePassword: "",
    gender: "",
  };

  const validationSchema = Yup.object().shape({
    displayName: Yup.string().required().max(28).min(4).label("Display name"),
    username: Yup.string().required().max(28).min(4).label("Username"),
    password: Yup.string().required().min(4),
    email: Yup.string().required().email().label("Email"),
    rePassword: Yup.string().required().min(4).label("Password confirmation"),
    gender: Yup.string().required(),
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.header, style.header]}>Sign up</Text>
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async ({ displayName: name, email, password }) => {
            const result = await apiClient.register({ name, email, password });
            if (result.ok) return console.log(result.data);
            console.log(result.data.error);
          }}
        >
          <InputField
            placeholder="Your display name"
            icon="user"
            name="displayName"
          />
          <InputField placeholder="Your username" name="username" icon="user" />
          <InputField placeholder="Your Email adress" name="email" />
          <InputField
            placeholder="Your password"
            name="password"
            icon="lock"
            isPassword
          />
          <InputField
            placeholder="One more time to make sure !"
            icon="lock"
            name="rePassword"
            isPassword
          />
          <View style={styles.radio}>
            <Text style={styles.radioText}>Gender</Text>
            <Radio name="gender" />
          </View>
          <FormButton title="Create account" />
        </Form>
        <Text style={{ fontWeight: "bold", margin: 15 }}>
          You have an account ?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{ color: colors.primary }}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    marginVertical: 30,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "baseline",
    marginHorizontal: 5,
    marginVertical: 8,
  },
  radioText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 18,
    color: colors.primary,
  },
});

export default RegisterScreen;
