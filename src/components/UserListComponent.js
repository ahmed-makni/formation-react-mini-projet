import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, popOverForm } from "../actions/userActions";
import { DataGrid } from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/EditOutlined";
import EditUser from "./EditUser";
const UserListComponent = () => {
  const dispatch = useDispatch();
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "First name", width: 130 },
    { field: "last_name", headerName: "Last name", width: 130 },
    {
      field: "email",
      headerName: "email",
      type: "number",
      width: 200,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue("first_name") || ""} ${
          params.getValue("last_name") || ""
        }`,
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        // const id = params.getValue("id");
        return (
          <div
            style={{
              width: "100%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EditIcon
              onClick={() => {
                //const user = userListData.data.find((u) => u.id === id);
                handleSettingsForm(params);
              }}
            />
          </div>
        );
      },
    },
  ];
  const pagination = {
    page: 1,
    per_page: 10,
  };

  const { userListData } = useSelector(({ users }) => users);
  useEffect(() => {
    if (!userListData.data) {
      dispatch(
        getUsers(
          `/users?page=${pagination.page}&per_page=${pagination.per_page}`,
          pagination
        )
      );
    }
    console.log("userListData : " + userListData);
  }, [userListData]);

  const handleSettingsForm = (user) => {
    dispatch(popOverForm(user));
  };
  return (
    <div>
      <div style={{ maxWidth: "100%" }}>
        <div style={{ height: 400, width: "100%" }}>
          {userListData.data ? (
            <DataGrid
              rows={userListData.data}
              columns={columns}
              pageSize={5}
              checkboxSelection
            />
          ) : null}
          <EditUser />

          {/*<DataGrid*/}
          {/*rows={rows}*/}
          {/*columns={columns}*/}
          {/*pageSize={5}*/}
          {/*checkboxSelection*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
};

export default UserListComponent;
