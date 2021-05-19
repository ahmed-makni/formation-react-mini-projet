import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/userActions";
import { DataGrid } from "@material-ui/data-grid";

const UserListComponent = () => {
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
  ];
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
  }, [dispatch]);

  return (
    <div>
      <div style={{ maxWidth: "100%" }}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={userListData.data}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default UserListComponent;
