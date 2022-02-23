import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

import Button from "./Button";

function ProductCard(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/product.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Product card</Text>
        <Text style={styles.description} numberOfLines={3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.{" "}
        </Text>
        <Text style={styles.price}>120 - TND</Text>
        <Button
          style={{ width: "100%" }}
          textStyle={{ fontSize: 14 }}
          title="add to card"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 12,
    flexDirection: "row",
    marginVertical: 10,
  },
  image: {
    height: 150,
    width: 150,
    margin: 10,
    borderRadius: 12,
  },
  detailsContainer: {
    width: "50%",
  },
  title: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 24,
  },
  description: {
    color: colors.black,
    lineHeight: 20,
  },
  price: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ProductCard;
