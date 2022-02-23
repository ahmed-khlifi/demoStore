import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import MyTheme from "./app/config/navigation";
import Safe from "./app/components/Safe";
import AddCategoryProductScreen from "./app/screens/AddCategoryProductScreen";
import HomeScreen from "./app/screens/HomeScreen";

import AuthNavigation from "./app/navigation/AuthNavigation";
import AppNavigation from "./app/navigation/AppNavigation";

export default function App() {
  return (
    <Safe>
      <NavigationContainer theme={MyTheme}>
        <AppNavigation />
      </NavigationContainer>
    </Safe>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
