import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

import Button from "../components/Button";
import Input from "../components/Input";
import Radio from "../components/Radio";
import colors from "../config/colors";
import style from "../config/styles";

function RegisterScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.header, style.header]}>Sign up</Text>
        <Input placeholder="Your display name" icon="user" />
        <Input placeholder="Your email adress" icon="" />
        <Input placeholder="Your password" icon="lock" isPassword />
        <Input
          placeholder="One more time to make sure !"
          icon="lock"
          isPassword
        />
        <View style={styles.radio}>
          <Text style={styles.radioText}>Gender</Text>
          <Radio />
        </View>
        <Button title="Create account" />
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
    color: colors.primary,
  },
});

export default RegisterScreen;
