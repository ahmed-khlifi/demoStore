import React, { useContext } from "react";
import AuthContext from "./authContext";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

function useAuth(props) {
  const { setUser } = useContext(AuthContext);

  const login = async (token) => {
    const user = jwtDecode(token);
    await authStorage.setAuthToken(user);
    setUser(user);
    console.log("====================================");
    console.log(await authStorage.getAuthToken());
    console.log(await user);
    console.log("====================================");
  };

  const logout = async () => {
    await authStorage.deleteAuthToken();
    setUser(null);
  };

  const getUser = async () => {
    return user;
  };

  return { login, logout, getUser };
}

export default useAuth;
