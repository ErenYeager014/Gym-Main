import axios from "axios";
const Axios = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  credentials: "include",
  withCredentials: true,
});

export default Axios;
