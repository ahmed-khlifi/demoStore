import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import AuthNavigation from "./AuthNavigation";

const Bottom = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        component={AuthNavigation}
        name="Auth"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" size={size} color={color} />
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
    </Bottom.Navigator>
  );
}

const styles = StyleSheet.create({});
