import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./actions/userActions";

const api = axios.create({
  baseURL: "https://reqres.in/api",
});
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers("/users"));
  }, []);
  return <div className="App" />;
}

export default App;
