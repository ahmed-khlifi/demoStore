import React from "react";
import { View, StyleSheet, Text, Platform, SafeAreaView } from "react-native";
import Constants from "expo-constants";

import DefaultStyle from "../config/styles";
// this component create safe area for android & IOS
function AddCategory({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[style, { flex: 1 }]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 20,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
export default AddCategory;
