import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import colors from "../config/colors";
import Button from "../components/Button";
import useAuth from "../auth/useAuth";
import AuthContext from "../auth/authContext";

export default function AccountScreen() {
  const { logout, getUser } = useAuth();
  const { user } = useContext(AuthContext);
  return (
    <View style={{ margin: 10, flex: 1 }}>
      <View style={styles.headerAccount}>
        <View style={styles.image} />
        <View>
          <Text
            style={{ color: colors.primary, fontWeight: "bold", fontSize: 24 }}
          >
            {user.name}
          </Text>
          <Text style={{ color: colors.grey }}>{user.email}</Text>
        </View>
      </View>
      <Button title="Log out" style={styles.button} onPress={() => logout()} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerAccount: {
    backgroundColor: colors.light,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    backgroundColor: colors.primary,
    borderRadius: 40,
    marginRight: 15,
  },
  button: {
    position: "absolute",
    bottom: 10,
  },
});
