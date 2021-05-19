import axios from "axios";
import { REST_URI } from "../../services/rest-uri";

export const api = axios.create({
  baseURL: REST_URI.commons.users,
});
