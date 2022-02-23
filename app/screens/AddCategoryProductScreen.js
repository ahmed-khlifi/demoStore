import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import AddCategory from "../components/AddCategory";
import AddProduct from "../components/AddProduct";

function AddCategoryProductScreen(props) {
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"} styles={styles.container}>
      {/* Add Category component */}
      <AddCategory />
      {/* Add Product component */}
      <AddProduct />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default AddCategoryProductScreen;
