import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import SwipeDelete from "./SwipeDelete";

function OrderItem(props) {
  return (
    <Swipeable
      renderRightActions={() => (
        <View
          style={{
            backgroundColor: colors.danger,
            width: 70,
          }}
        ></View>
      )}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/product.jpg")} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Product card</Text>
          <Text style={styles.description} numberOfLines={1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.{" "}
          </Text>
          <Text style={styles.price}>120 - TND</Text>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  image: {
    height: 80,
    width: 80,
    margin: 10,
    borderRadius: 12,
  },
  detailsContainer: {
    width: "70%",
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

export default OrderItem;
