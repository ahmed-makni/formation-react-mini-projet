import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./actions/userActions";
import React from "react";

const api = axios.create({
  baseURL: "https://reqres.in/api",
});
function App() {
  const dispatch = useDispatch();
  const { userListData } = useSelector(({ users }) => users);
  useEffect(() => {
    if (userListData) {
      dispatch(getUsers("/users"));
    }
  }, []);
  return <div className="App" />;
}

export default App;
