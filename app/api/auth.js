import client from "./client";

// login function
const login = (email, password) => client.post("/auth", { email, password });

export default {
  login,
};
