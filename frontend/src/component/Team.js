import React from "react";
import vksharma from "../Assets/VkSharma.JPG";
import Joseph from "../Assets/Joseph.jpg";
import vishal from "../Assets/Vishal.jpg";
import deepak from "../Assets/Deepak.jpg";
import manoj from "../Assets/Manoj.jpg";
import anil from "../Assets/Anil.jpg";
import "../index.css";
const Team = () => {
  return (
    <>
      <div
        // style={{
        //   marginTop: "16px",
        // }}
        style={
          {
            // borderStyle: "double",
            // borderBlockColor: "white",
          }
        }
      >
        <div
          style={{
            borderRadius: "8px",
            marginTop: "16px",
            marginBottom: "8px",
            backgroundColor: "white",
            padding: "10px",
          }}
        >
          <h3>
            <strong
              className="brand"
              style={{ color: "#02284A", fontFamily: "Poppins"}}
            >
              Guidance
            </strong>
          </h3>

          <div class="row">
            <div class="col">
              <div class="card h-100" style={{ backgroundColor: "#d2eaf7" }}>
                <img
                  src={vksharma}
                  width="200px"
                  height="200px"
                  alt=".."
                  style={{
                    margin: "16px",
                    padding: "8px",
                    borderRadius: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",

                    display: "block",
                    boxShadow: "0 0 5px 5px black",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">Sh V K Sharma</h5>
                  <p class="card-text">Director</p>
                  <p class="card-text">CDAC Mohali</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100" style={{ backgroundColor: "#d2eaf7" }}>
                <img
                  src={Joseph}
                  width="200px"
                  height="200px"
                  alt=".."
                  style={{
                    margin: "16px",
                    padding: "8px",
                    borderRadius: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                    boxShadow: "0 0 5px 5px black",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">Dr Joseph Mathews</h5>
                  <p class="card-text">Prof. of Ped. Pulmonology</p>
                  <p style={{ color: "#083f5c" }}>APC, PGIMER Chandigarh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div
          style={{
            borderRadius: "8px",
            marginTop: "16px",
            marginBottom: "8px",
            backgroundColor: "white",
            padding: "10px",
          }}
        >
          <h3>
            <strong
              className="brand"
              style={{ color: "#02284A", fontFamily: "Poppins" }}
            >
              Medical Specialists
            </strong>
          </h3>
          <div class="">
            <div class="row">
              <div class="col">
                <div class="card h-100" style={{ backgroundColor: "#d2eaf7" }}>
                  <img
                    src={vishal}
                    width="200px"
                    height="200px"
                    alt=".."
                    style={{
                      margin: "16px",
                      padding: "8px",
                      borderRadius: "50%",
                      marginLeft: "auto",
                      marginRight: "auto",

                      display: "block",
                      boxShadow: "0 0 5px 5px black",
                    }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dr Vishal Guglani</h5>
                    <p class="card-text">
                      Professor & HoD (Pediatrics) GMCH 32
                    </p>
                    <p class="card-text">Chandigarh</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100" style={{ backgroundColor: "#d2eaf7" }}>
                  <img
                    src={deepak}
                    width="200px"
                    height="200px"
                    alt=".."
                    style={{
                      margin: "16px",
                      padding: "8px",
                      borderRadius: "50%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      boxShadow: "0 0 5px 5px black",
                    }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dr Deepak Chawla</h5>
                    <p class="card-text">Prof., Department of Pediatrics</p>
                    <p class="card-text">GMCH 32 Chandigarh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div> */}
      <br></br>
        <div
          style={{
            borderRadius: "8px",
            marginTop: "16px",
            marginBottom: "8px",
            backgroundColor: "white",
            padding: "10px",
          }}
        >
          <h3>
            <strong
              className="brand"
              style={{ color: "#02284A", fontFamily: "Poppins" }}
            >
              Funding Support
            </strong>
          </h3>
      
          <div class="">
            <div class="row">
              <div class="col">
                <div class="card h-100" style={{ backgroundColor: "#d2eaf7" }}>
                  <img
                    src={manoj}
                    width="200px"
                    height="200px"
                    alt=".."
                    style={{
                      margin: "16px",
                      padding: "8px",
                      borderRadius: "50%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      boxShadow: "0 0 5px 5px black",
                    }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Sh. Manoj Jain,</h5>
                    <p class="card-text">Scientist F</p>
                    <p class="card-text">Ministry of Electronics & IT (Meity), Govt. of India, New Delhi</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100" style={{ backgroundColor: "#d2eaf7" }}>
                  <img
                    src={anil}
                    width="200px"
                    height="200px"
                    alt=".."
                    style={{
                      margin: "16px",
                      padding: "8px",
                      borderRadius: "50%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      boxShadow: "0 0 5px 5px black",
                    }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Sh Anil Sagar</h5>
                    <p class="card-text">Scientist D</p>
                    <p class="card-text">Ministry of Electronics & IT (Meity), Govt. of India, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      </div>

      
      <br></br>

      <hr></hr>
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

export default Team;
