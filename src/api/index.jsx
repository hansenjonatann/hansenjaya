import axios from "axios";

const Api = axios.create({
  baseURL: "http://192.168.187.1:8000",
});

export default Api;
