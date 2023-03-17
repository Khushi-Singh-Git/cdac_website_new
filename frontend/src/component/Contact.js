import React from "react";
import vksharma from "../Assets/VkSharma.JPG";
import Joseph from "../Assets/Joseph.jpg";
import vishal from "../Assets/Vishal.jpg";
import deepak from "../Assets/Deepak.jpg";
import cdac from "../Assets/cdac.jpg";
import manoj from "../Assets/Manoj.jpg";
import anil from "../Assets/Anil.jpg";
import "../index.css";
const Contact = () => {
  return (
    <>

    <br></br>
 <div style={{ textAlign: "center" }}>
        <img
          src={cdac}
          width="800px"
          height="400px"
          alt=".."
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            
          }}
        />
        <h4
          className="my-3"
          style={{
            textAlign: "justify",
            color: "white",
            fontFamily: "Poppins",
          }}
        >
          Contact Us: <br></br>
          <span style={{ color: "#bfd4f5" }}>
            Jaspal Singh, Associate Director; Jaspal@cdac.in
          </span> <br></br>
          <span style={{ color: "#bfd4f5" }}>
            Shailesh Singh , Principal Engineer; shaileshsingh@cdac.in
          </span>
          <br></br>
          Center for Development of Advanced Computing 
          <br></br>
          Computing in medicine and Biology division, 
          A-34, Phase-VIII, Industrial Area Mohali - 160071
          <br></br>
          (Near Chandigarh)Punjab, (India) 
          <br></br>
          Phone: +91-172-2237052-55, 6619000
          Fax: +91-172-2237050-51
        </h4>
      </div>

    
      <h6
        style={{ textAlign: "center", color: "white", fontFamily: "poppins" }}
      >
        {" "}
        Developed by CDAC, Mohali
      </h6>

      <br></br>
    </>
  );
};

export default Contact;
