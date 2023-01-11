import React from "react";
import "../index.css";
const About = () => {
  return (
    <>
      <div>
        <p style={{color:"white",fontFamily:"Poppins",fontSize:"30px",textAlign:"justify"}}>
          The aim of the project is to assist in convenient and early diagnosis
          of pneumonia in children who cannot easily access / consult a medical
          specialist. This early diagnosis would help save the life of children
          from one of the major cause of child mortality in India. This should go
          long way in improving the under-five mortality rate in India- An
          important development goal set by National child health policy 2017,
          SDG (along with WHO) for Indian healthcare. Improving this statistic
          is an important agenda for national child health mission, also.
        </p>
      </div>
      {/* <h6
        style={{ textAlign: "center", color: "white", fontFamily: "poppins" }}
      >
        {" "}
        Developed by CDAC, Mohali
      </h6> */}
    </>
  );
};

export default About;
