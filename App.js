import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import MyTheme from "./app/config/navigation";
import Safe from "./app/components/Safe";
import AddCategoryProductScreen from "./app/screens/AddCategoryProductScreen";

import AuthNavigation from "./app/navigation/AuthNavigation";

export default function App() {
  return (
    <Safe>
      <NavigationContainer theme={MyTheme}>
        <AuthNavigation />
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
