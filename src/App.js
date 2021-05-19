import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./actions/userActions";
import React from "react";

function App() {
  const pagination = {
    page: 1,
    per_page: 10,
  };

  const dispatch = useDispatch();
  const { userListData } = useSelector(({ users }) => users);
  useEffect(() => {
    if (userListData) {
      dispatch(
        getUsers(
          `/users?page=${pagination.page}&per_page=${pagination.per_page}`,
          pagination
        )
      );
    }
    console.log("userListData : " + userListData);
  }, []);
  return (
    <div className="App">
      {userListData?.data?.map((e, i) => {
        return <div key={i}>{e.email}</div>;
      })}
    </div>
  );
}

export default App;
