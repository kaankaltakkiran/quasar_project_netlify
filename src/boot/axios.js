// src/boot/axios.js
import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export default boot(({ app }) => {
  // Axios'u Vue instance'a ekleyin
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
