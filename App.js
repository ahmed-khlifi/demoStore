import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import MyTheme from "./app/config/navigation";
import Safe from "./app/components/Safe";
import AuthContext from "./app/auth/authContext";
import authStorage from "./app/auth/storage";

import AppNavigation from "./app/navigation/AppNavigation";
import AuthNavigation from "./app/navigation/AuthNavigation";

export default function App() {
  const [user, setUser] = useState();
  const getCache = async () => {
    const token = await authStorage.getAuthToken();
    if (!token) return;
    setUser(token);
    console.log("On mount ", user);
  };

  useEffect(() => {
    getCache();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Safe>
        <NavigationContainer theme={MyTheme}>
          {user ? <AppNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </Safe>
    </AuthContext.Provider>
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
