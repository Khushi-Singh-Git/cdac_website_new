import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import product from "../Assets/product.jpeg";
const Home = () => {
  return (
    <>
      <div>
        <section id="header" className="">
          <div className="container-fulid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <h2 style={{ color: "white", fontFamily: "poppins" }}> </h2>
                  <div
                    className="col-md-6 pt-5 order-2 order-lg-1"
                    style={{ fontFamily: "Inconsolata" }}
                  >
                    <h2>
                      <strong
                        className="brand"
                        style={{
                          color: "#b5e2f5",
                          fontFamily: "poppins",
                          textAlign: "center",
                        }}
                      >
                        Digital stethoscope based paediatric pulmonary care at
                        your door steps{" "}
                      </strong>
                    </h2>{" "}
                    <br></br>
                    <h4
                      className="my-3"
                      style={{
                        textAlign: "justify",
                        color: "white",
                        fontFamily: "poppins",
                      }}
                    >
                      Aims at using multi-modal analytics approach to aid early
                      diagnosis and monitoring of paediatric pneumonia, ‘as a
                      virtual assistant’ available for the remote non-specialist
                      medico.
                    </h4>
                    <div className="mt-3 mt-5"></div>
                  </div>
                  <div className="animated col-lg-6 order-1 order-lg-2 mt-5">
                    <img
                      src={product}
                      width="400px"
                      height="400px"
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <br></br><br></br>
       
         
         

        <hr style={{ fontSize: "30px" }}></hr>
        {/* <img src='https://i0.wp.com/orissadiary.com/wp-content/uploads/2021/09/Ministry-of-Electronics-and-Information-Technology.png?fit=225%2C225&ssl=1' style={{borderRadius:"50%"}} height="100px" width="100px" alt=".."></img> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <img src='https://pbs.twimg.com/profile_images/1337364620105805825/Y_5SbcCA_400x400.jpg' style={{borderRadius:"50%"}} height="100px" width="100px" alt="..."></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <img src='https://cracku.in/latest-govt-jobs/wp-content/uploads/2020/02/GMCH-Logo.jpg' style={{borderRadius:"50%"}} height="100px" width="100px" alt=".."></img><br></br> */}
      </div>
  
      <h6
        style={{ textAlign: "center", color: "white", fontFamily: "poppins" }}
      >
        {" "}
        Developed by CDAC, Mohali
      </h6>
     
    </>
  );
};

export default Home;
