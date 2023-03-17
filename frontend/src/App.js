import { createContext, useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import Welcome, { ErrorPage } from "./component/Welcome";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Diagnose from "./component/Diagnose";
import Home from "./component/Home";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Signup from "./component/Signup";
// import Main from "./component/Main";
import Team from "./component/Team";
// import server from "./component/server";
import MessagePopup from "./lib/MessagePopup";
// import isAuth, { userType } from "./lib/isAuth";
import React from "react";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "64px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const SetPopupContext = createContext();

function App() {
  const classes = useStyles();
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return (
    <HashRouter>
      <SetPopupContext.Provider value={setPopup}>
        <Grid container direction="column">
          <Grid item xs>
            <Navbar />
          </Grid>
          <Grid item className={classes.body}>
            <Routes>
              <Route exact path="/" element={<Welcome />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<Signup />}></Route>
              <Route exact path="/logout" element={<Logout />}></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/diagnose" element={<Diagnose />}></Route>
              <Route exact path="/team" element={<Team />}></Route>
              <Route exact path="/" element={<ErrorPage />}></Route>
            </Routes>
          </Grid>
        </Grid>
        <MessagePopup
          open={popup.open}
          setOpen={(status) =>
            setPopup({
              ...popup,
              open: status,
            })
          }
          severity={popup.severity}
          message={popup.message}
        />
      </SetPopupContext.Provider>
    </HashRouter>
  );
}

export default App;
