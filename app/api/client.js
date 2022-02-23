import { create } from "apisauce";

const API = "http://192.168.1.152:9000/api";

const apiClient = create({
  baseURL: API,
});

export default apiClient;
