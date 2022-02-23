import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";

import DefaultStyle from "../config/styles";
import Input from "../components/Input";
import ImageSelect from "../components/ImageSelect";
import Button from "../components/Button";
import CategorySelector from "../components/CategorySelector";

function AddProduct(props) {
  const [modaleVisible, setModaleVisible] = useState(false);
  const [category, setCategory] = useState();
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"}>
      <Text style={[DefaultStyle.header, styles.text]}>add Product</Text>
      <Input placeholder="Product name" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Input
          placeholder="Price"
          style={{ width: "48%" }}
          keyboardType="numeric"
        />
        <Input
          placeholder={category ? category : "Category"}
          style={{ width: "48%" }}
          editable={false}
          onPress={() => setModaleVisible(true)}
        />
      </View>
      <Input placeholder="Description" multiline />
      <ImageSelect />
      <Button title="Add Product" />
      <CategorySelector
        modaleVisible={modaleVisible}
        setModaleVisible={setModaleVisible}
        setCategory={setCategory}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

export default AddProduct;
