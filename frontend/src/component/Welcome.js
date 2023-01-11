import { Grid, Typography } from "@material-ui/core";
import React from "react";
import '../index.css';
const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "4px", minHeight: "3vh", color:"white",fontFamily:"poppins",textAlign:"center" }}
    >
     
   
         <Grid item>
        <Typography variant="h2" color="white">Welcome to Paediatric pulmonary care Portal</Typography>
      </Grid>
    </Grid>
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
