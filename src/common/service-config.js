import axios from "axios";
import Const from "./constant";

export function api() {
//   const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: Const.API.URL,
    headers: {
      "Content-Type": "application/json",
    //   'Authorization': `Bearer ${token}`,
    },
  });
  return instance;
}
