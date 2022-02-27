import * as SecureStore from "expo-secure-store";

// set user token

const KEY = "authToken";

const setAuthToken = async (token) => {
  try {
    await SecureStore.setItemAsync(KEY, JSON.stringify(token));
  } catch (error) {
    console.log(error);
  }
};

const getAuthToken = async () => {
  try {
    return await SecureStore.getItemAsync(KEY);
  } catch (error) {
    console.log(error);
  }
};

const deleteAuthToken = async () => {
  try {
    await SecureStore.deleteItemAsync(KEY);
  } catch (error) {
    console.log(error);
  }
};

export default {
  setAuthToken,
  getAuthToken,
  deleteAuthToken,
};
