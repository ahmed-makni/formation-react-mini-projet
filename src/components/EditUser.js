import React, { useEffect } from "react";
import Popover from "@material-ui/core/Popover";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./editUser.scss";
// Messages
const required = "Field is required";
const maxLength = "Your input exceed maximum length";
const pattern = "Pattern should be respected";

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};
const EditUser = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { popOverUser } = useSelector(({ users }) => users);
  const { register, handleSubmit, errors, reset } = useForm();
  useEffect(() => {
    popOverUser ? setAnchorEl(true) : setAnchorEl(null);
  }, [popOverUser]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = (dataToSend) => {
    handleClose();
  };

  const resetForm = () => {
    reset({ first_name: "", last_name: "", email: "" });
  };

  const handleCancelClick = () => {
    resetForm();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="settings-popup">
          <div className="popup-header">
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={8}>
                <span className="description-title-poi subtitle">
                  Edit User
                </span>
              </Grid>
            </Grid>
            <form>
              <div id="popup-content" className="settings-popup-content">
                <Grid container spacing={5} alignItems="center">
                  <Grid item sm={5}>
                    <span className="description-label label-md">
                      User name:
                    </span>
                  </Grid>
                  <Grid item sm={7}>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="first_name"
                      name="first_name"
                      defaultValue={popOverUser?.row?.first_name}
                      ref={register({ required: true, maxLength: 20 })}
                    />
                    {errors.first_name &&
                      errors.first_name.type === "required" &&
                      errorMessage(required)}
                    {errors.first_name &&
                      errors.first_name.type === "maxLength" &&
                      errorMessage(maxLength)}
                  </Grid>
                </Grid>
                <Grid container spacing={5} alignItems="center">
                  <Grid item sm={5}>
                    <span className="description-label label-md">
                      Last name:
                    </span>
                  </Grid>
                  <Grid item sm={7}>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="lastName"
                      name="lastName"
                      defaultValue={popOverUser?.row?.last_name}
                      ref={register({ required: true, maxLength: 50 })}
                    />
                    {errors.last_name &&
                      errors.last_name.type === "required" &&
                      errorMessage(required)}
                    {errors.last_name &&
                      errors.last_name.type === "maxLength" &&
                      errorMessage(maxLength)}
                  </Grid>
                </Grid>
                <Grid container spacing={5} alignItems="center">
                  <Grid item sm={5}>
                    <span className="description-label label-md">Email:</span>
                  </Grid>
                  <Grid item sm={7}>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      name="email"
                      defaultValue={popOverUser?.row?.email}
                      ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email &&
                      errors.email.type === "required" &&
                      errorMessage(required)}
                    {errors.email &&
                      errors.email.type === "pattern" &&
                      errorMessage(pattern)}
                  </Grid>
                </Grid>

                <Grid container spacing={5} alignItems="center">
                  <Grid item sm={5} />
                  <Grid item sm={3}>
                    <button
                      type="button"
                      className="popup-button btn-md"
                      onClick={(event) => handleCancelClick(event)}
                    >
                      CANCEL
                    </button>
                  </Grid>
                  <Grid item sm={3}>
                    <button
                      className="popup-button btn-md"
                      type="submit"
                      onClick={handleSubmit(onSubmit)}
                    >
                      SAVE
                    </button>
                  </Grid>
                </Grid>
              </div>
            </form>
          </div>
        </div>
      </Popover>
    </div>
  );
};
export default EditUser;
