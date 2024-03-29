import React from "react";
import { useContext, useState } from "react";
import { Grid, Button, Typography, makeStyles, Paper } from "@material-ui/core";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../lib/PasswordInput";
import EmailInput from "../lib/EmailInput";
import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase-config";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "60px 60px",
  },
  inputBox: {
    width: "300px",
  },
  submitButton: {
    width: "300px",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [loggedin, setLoggedin] = useState(isAuth());

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
  });

  
  const history = useNavigate();
  const handleClick = (location) => {
    console.log(location);
    history(location);
  };

  const handleInput = (key, value) => {
    setLoginDetails({
      ...loginDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const verified = !Object.keys(inputErrorHandler).some((obj) => {
      return inputErrorHandler[obj].error;
    });

    signInWithEmailAndPassword(
      auth,
      loginDetails["email"],
      loginDetails["password"]
    )
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.user.accessToken);
        //localStorage.setItem("type", response.data.type);
        setLoggedin(isAuth());
      })
      .catch((err) => {
        console.log("Error occured", err);
      });
    // if (verified) {
    //   axios
    //     .post(apiList.login, loginDetails)
    //     .then((response) => {
    //       localStorage.setItem("token", response.data.token);
    //       localStorage.setItem("type", response.data.type);
    //       setLoggedin(isAuth());
    //       setPopup({
    //         open: true,
    //         severity: "success",
    //         message: "Logged in successfully",
    //       });
    //       console.log(response);
    //     })
    //     .catch((err) => {
    //       setPopup({
    //         open: true,
    //         severity: "error",
    //         message: err.response.data.message,
    //       });
    //       console.log(err.response);
    //     });
    // } else {
    //   setPopup({
    //     open: true,
    //     severity: "error",
    //     message: "Incorrect Input",
    //   });
    // }
  };

  return loggedin ? (
    <Navigate to="/home" />
  ) : (
    <Paper elevation={3} className={classes.body}>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            Login
          </Typography>
        </Grid>
        <Grid item>
          <EmailInput
            label="Email"
            value={loginDetails.email}
            onChange={(event) => handleInput("email", event.target.value)}
            inputErrorHandler={inputErrorHandler}
            handleInputError={handleInputError}
            className={classes.inputBox}
          />
        </Grid>
        <Grid item>
          <PasswordInput
            label="Password"
            value={loginDetails.password}
            onChange={(event) => handleInput("password", event.target.value)}
            className={classes.inputBox}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLogin()}
            className={classes.submitButton}
          >
            Login
          </Button>
          <br></br>
          
        </Grid>
        <Typography
              color="inherit"
              style={{
                color: "red",
                fontFamily: "Poppins",
                fontSize: "20px",
              }}
              onClick={() => handleClick("/signup")}
            >
              Not yet registered?, click here to Signup
            </Typography>
      </Grid>
    </Paper>
  );
};

export default Login;
