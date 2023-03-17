import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "../index.css";
import product from "../Assets/product.jpeg";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const Welcome = (props) => {
  const history = useNavigate();

  const handleClick = (location) => {
    console.log(location);
    history(location);
  };

  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          padding: "4px",
          minHeight: "3vh",
          color: "white",
          fontFamily: "poppins",
          textAlign: "center",
        }}
      >
        <Grid item>
          <Typography
            variant="h4"
            style={{ color: "#c7ecee", fontFamily: "Poppins" }}
          >
            Welcome to the AI engine for Detection of Paediatric Pneumonia
          </Typography>{" "}
          <br></br>
        </Grid>
      </Grid>
      <div>
        {" "}
        <img
          src={product}
          width="300px"
          height="300px"
          alt=".."
          style={{
            borderRadius: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            boxShadow: "0 0 5px 5px black",
          }}
        />
      </div>
      <Typography
        variant="h6"
        style={{
          color: "white",
          fontFamily: "Poppins",
          marginLeft: "32px",
          marginRight: "32px",
          textAlign: "justify",
          marginTop: "16px",
        }}
      >
        This is an artificial intelligence-based program assist you in
        estimating if your paediatric patient needs immediate pneumonia care.
        The program uses only the auscultation sounds from the patient’s chest
        and basic observations. Thus, avoiding unnecessary X-ray imaging of the
        child.{" "}
      </Typography>{" "}
      <br></br>
      <Button
      
        // color="inherit"
        style={{ color: "white", fontFamily: "Poppins", fontSize: "20px", backgroundColor:"#3F51B5" }}
        onClick={() => handleClick("/login")}
      >
        {" "}
        Proceed to use
      </Button>
    </>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
