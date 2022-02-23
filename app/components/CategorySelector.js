import React from "react";
import { Modal, View, Text, StyleSheet, FlatList, Button } from "react-native";
import colors from "../config/colors";
import CategoryItem from "./CategoryItem";

const catergories = [
  {
    id: 1,
    name: "auto",
    image: "",
  },
  {
    id: 2,
    name: "toys",
    image: "",
  },
  {
    id: 3,
    name: "forniture",
    image: "",
  },
  {
    id: 4,
    name: "gaming",
    image: "",
  },
];

function CategorySelector({ modaleVisible, setModaleVisible, setCategory }) {
  return (
    <Modal visible={modaleVisible} animationType="slide">
      <FlatList
        data={catergories}
        keyExtractor={(category) => category.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => {
          return (
            <CategoryItem
              item={item}
              onPress={() => {
                setCategory(item.name), setModaleVisible(false);
              }}
            />
          );
        }}
      />
      <Button onPress={() => setModaleVisible(false)} title="cancel" />
    </Modal>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: colors.light,
  },
});

export default CategorySelector;
