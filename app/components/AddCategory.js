import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import DefaultStyle from "../config/styles";
import Input from "../components/Input";
import ImageSelect from "../components/ImageSelect";
import Button from "../components/Button";

function AddCategory(props) {
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"}>
      <Text style={[DefaultStyle.header, styles.text]}>add Category</Text>
      <Input placeholder="Category name" />
      <ImageSelect />
      <Button title="Add category" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

export default AddCategory;
