import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../config/colors";

function ImageSelect(props) {
  const [imageUri, setImageUri] = useState();

  // get permission
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("We need permission to access to your library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  // select image
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
      });
      if (!result.cancelled) {
        setImageUri(result.uri);
        console.log(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {!imageUri ? (
        <TouchableOpacity onPress={selectImage}>
          <View style={styles.button}>
            <FontAwesome name="camera" size={32} color="grey" />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri, width: 70, height: 70 }} />
          <TouchableOpacity
            onPress={() => setImageUri(null)}
            style={styles.deleteButton}
          >
            <FontAwesome name="trash" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: "100%",
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: colors.danger,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
});

export default ImageSelect;
