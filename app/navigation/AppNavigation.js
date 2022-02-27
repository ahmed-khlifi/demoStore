import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import LoginScreen from "../screens/LoginScreen";
import AddCategoryProductScreen from "../screens/AddCategoryProductScreen";
import HomeScreen from "../screens/HomeScreen";
import AuthNavigation from "./AuthNavigation";
import OrderScreen from "../screens/OrderScreen";
import OrderContext from "../context/OrderContext";
import AccountScreen from "../screens/AccountScreen";

const Bottom = createBottomTabNavigator();

export default function AppNavigation() {
  const [orders, setOrders] = useState([]);
  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      <Bottom.Navigator>
        <Bottom.Screen
          component={AccountScreen}
          name="Account"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Bottom.Screen
          component={AddCategoryProductScreen}
          name="Add"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" size={size} color={color} />
            ),
          }}
        />
        <Bottom.Screen
          component={HomeScreen}
          name="Home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Bottom.Screen
          component={OrderScreen}
          name="order"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="basket" size={size} color={color} />
            ),
          }}
        />
      </Bottom.Navigator>
    </OrderContext.Provider>
  );
}

const styles = StyleSheet.create({});
