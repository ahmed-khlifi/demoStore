import { StyleSheet, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import OrderContext from "../context/OrderContext";

export default function OrderScreen() {
  const { orders } = useContext(OrderContext);
  return (
    <ScrollView>
      {orders.length > 0 ? null : <Text>You didn't order yet</Text>}
      {orders.map((order, i) => (
        <Text>
          {" "}
          <OrderItem key={i} />
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
