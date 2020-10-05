import axios from "axios";
import { getToken } from "./Auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  withCredentials: true,
});

api.interceptors.request.use(async config => {
  try {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `the Bearer is ${token}`;
    }
    return config;
  }
  catch (err) {
    console.error(err)
  }
});

export default api;