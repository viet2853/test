import axios from "axios";

export const instance = axios.create({
  baseURL: "https://wgmd69.sse.codesandbox.io/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
