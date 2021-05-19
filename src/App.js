import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./actions/userActions";
import React from "react";

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
