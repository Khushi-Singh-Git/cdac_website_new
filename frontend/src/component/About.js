import React from "react";
import aboutTechnology from "../Assets/aboutTechnology.jpg";
import "../index.css";
const About = () => {
  return (
    <>
      <div>
        <h1
          style={{
            color: "#b5e2f5",
            fontFamily: "Poppins",
            fontSize: "36px",
            textAlign: "justify",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          The Technology
        </h1>
        <p
          style={{
            color: "white",
            fontFamily: "Poppins",
            fontSize: "20px",
            marginLeft: "20px",
            marginRight: "20px",
            textAlign: "justify",
          }}
        >
          Paediatric Pneumonia is one of the most common cause of post-neonatal
          child mortality in India. It is prevalent in the poor and deprived
          sections of our society and it happens to be important contributor to
          poor infant mortality rate (IMR) and thereby India’s ranking in the
          Global Health Index In this regard, CDAC Mohali with support from the
          ministry of electronics and IT (MeitY) and guidance of senior
          paediatrics specialists from Government Medical College & Hospital and
          Post Graduate Institute of Medical Education & Research (PGI),
          Chandigarh has successfully developed an AI based multi-modal data
          analytics framework for estimation of paediatric pneumonia. The
          overall structure of the system is shown below.
        </p>
        <div>
          {" "}
          <img
            src={aboutTechnology}
            alt=".."
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          />
        </div>
      </div>
      <br></br>
      <h2
        style={{
          color: "#b5e2f5",
          fontFamily: "Poppins",
          fontSize: "23px",
          textAlign: "justify",
        }}
      >
        Overall structure of the assisted diagnosis{" "}
      </h2>
      <p
        style={{
          color: "white",
          fontFamily: "Poppins",
          fontSize: "20px",
          marginLeft: "20px",
          marginRight: "20px",
          textAlign: "justify",
        }}
      >
        The AI framework is basically a hybrid multi-stage framework. The
        workhorse in the framework is a DL based model, trained using
        auscultation data of over 10,000 audio files collected form GMCH,
        Chandigarh over a period of 2 years. To use the program one can upload
        auscultation files (lung sounds acquired with electronic stethoscope)
        and simple observations (fever, breathing rate, chest in-drawing and
        body coloration only). You can thus avoid unnecessary x-ray of the
        child.
      </p>
      <h6
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "poppins",
          marginBottom: "1px",
          paddingBottom: "1px",
        }}
      >
        <br></br> Developed by CDAC, Mohali
      </h6>
    </>
  );
};

export default About;
