import React from "react";
import ProductCard from "../components/ProductCard";
import { ScrollView } from "react-native";
function HomeScreen(props) {
  return (
    <ScrollView>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ScrollView>
  );
}

export default HomeScreen;
