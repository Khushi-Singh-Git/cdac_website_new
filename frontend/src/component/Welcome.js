import { Grid, Typography } from "@material-ui/core";
import React from "react";
import '../index.css';
import product from "../Assets/product.jpeg";
const Welcome = (props) => {
  return (
    <>
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "4px", minHeight: "3vh", color:"white",fontFamily:"poppins",textAlign:"center" }}
    >
     
   
         <Grid item>
        <Typography variant="h3" style={{color:"white",fontFamily:"Poppins"}}>Welcome to Paediatric pulmonary care Portal</Typography> <br></br>
        <Typography variant="h2" style={{color:"#c7ecee",fontFamily:"Poppins"}}>TeleShravan</Typography>

        
      </Grid>
    </Grid>
    <div> <img
                      src={product}
                      width="350px"
                      height="350px"
                      alt=".."
                      style={{
                        borderRadius: "50%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                        boxShadow: "0 0 5px 5px black",
                      }}
                    /></div>
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
