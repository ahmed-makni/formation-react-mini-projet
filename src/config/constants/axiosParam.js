import axios from "axios";

export const api = axios.create({
  baseUrl: `https://reqres.in/api`,
});