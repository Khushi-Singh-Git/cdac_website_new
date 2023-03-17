import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const history = useNavigate();
  const handleClick = (location) => {
    console.log(location);
    history(location);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <div style={{ display: "flex" }}>
            <p></p>&nbsp;
            <img
              src="https://i0.wp.com/orissadiary.com/wp-content/uploads/2021/09/Ministry-of-Electronics-and-Information-Technology.png?fit=225%2C225&ssl=1"
              style={{ borderRadius: "50%" }}
              height="50px"
              width="50px"
              alt=".."
            ></img>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src="https://pbs.twimg.com/profile_images/1337364620105805825/Y_5SbcCA_400x400.jpg"
              style={{ borderRadius: "50%" }}
              height="50px"
              width="50px"
              alt="..."
            ></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src="https://cracku.in/latest-govt-jobs/wp-content/uploads/2020/02/GMCH-Logo.jpg"
              style={{ borderRadius: "50%" }}
              height="50px"
              width="50px"
              alt=".."
            ></img>
            <br></br>
          </div>
        </Typography>

        {isAuth() ? (
          userType() === "admin" ? (
            <>
              <Button
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                onClick={() => handleClick("/about")}
              >
                About
              </Button>
              <Button
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                onClick={() => handleClick("/diagnose")}
              >
                Diagnose
              </Button>
              <Button
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                onClick={() => handleClick("/team")}
              >
                Credit
              </Button>
              <Button
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                onClick={() => handleClick("/logout")}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                onClick={() => handleClick("/home")}
              >
                Home
              </Button>
              <Button
                color="inherit"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                onClick={() => handleClick("/about")}
              >
                About
              </Button>
              <Button
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                onClick={() => handleClick("/diagnose")}
              >
                Diagnose
              </Button>
              <Button
                color="inherit"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                onClick={() => handleClick("/team")}
              >
                Credit
              </Button>
              <Button
                color="inherit"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                onClick={() => handleClick("/logout")}
              >
                Logout
              </Button>
            </>
          )
        ) : (
          <>
           <Button
              color="inherit"
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontSize: "20px",
              }}
              onClick={() => handleClick("/login")}
            >
              Login
            </Button>
            <Button
              color="inherit"
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontSize: "20px",
              }}
              onClick={() => handleClick("/signup")}
            >
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
