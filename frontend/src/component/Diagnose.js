import { useState, useRef } from "react";

function Diagnose() {
  const [processing, setProcessing] = useState(false);
  const [showDiagnoseButton, setshowDiagnose] = useState(false);
  const [showDiagnosing, setshowDiagnosing] = useState(false);
  const [stateReport, setstateReport] = useState("");
  const [enableStart, setEnableStart] = useState(false);

  function submitFile(event) {
    event.preventDefault();
    console.log("event fired");
    console.log(event.target);
    setProcessing(true);
    fetch("http://localhost:4000/multiple", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        Accept: "*/*",
        "Accept-Encoding": "gzip,br,deflate",
      },
      method: "POST",
      // mode: "no-cors",
      body: new FormData(event.target),
    })
      .then((response) => response.json())
      .then((body) => {
        console.log("her");
        console.log(body);
        setEnableStart(true);

        //delete the file after the result
        fetch("http://localhost:4000/delete", {
          headers: { "Access-Control-Allow-Origin": "*" },
          method: "POST",
          // mode: "no-cors",
        });

        //access button after files uplaoded
      })
      .catch((error) => {
        // TODO handle error
        console.log(error);
        console.log("some error occured");
      })
      .finally(() => {
        setProcessing(false);
        setshowDiagnose(true);
      });
    //   .finally({ setProcessing(false),
    //   setshowDiagnose(true);})
    // return false;
  }

  function diagnose() {
    setshowDiagnosing(true);
    console.log("diagnose fired");
    fetch("http://localhost:4000/diagnose", {
      headers: { "Access-Control-Allow-Origin": "*" },
      method: "GET",
      //mode: "no-cors",
    })
      .then((response) => response.json())
      .then((body) => {
        console.log("her");
        console.log(body);
        setstateReport(body);
        setshowDiagnosing(false);
        setshowDiagnose(false);
        //access button after files uplaoded
      })
      .catch((error) => {
        // TODO handle error
        console.log(error);
        console.log("some error occured");
        // setProcessing(false);
        // setshowDiagnose(true);
      });
    // .finally(setshowDiagnosing(false));
  }

  const filesRef = useRef();

  function enableStartButton(event) {
    event.preventDefault();
    setEnableStart(true);
  }

  return (
    <>
      <div>
        <form
          onSubmit={(event) => {
            //allow the submit button and clear the upload folder

            enableStartButton(event);

            fetch("http://localhost:4000/delete", {
              headers: { "Access-Control-Allow-Origin": "*" },
              method: "POST",
              // mode: "no-cors",
            });
          }}
        >
          <button
            style={{
              fontFamily: "Poppins",
              fontSize: "25px",
              borderRadius: "7px",
              backgroundColor: "#7ed6df",
            }}
            type="submit"
          >
            Start Auscultation
          </button>
        </form>
      </div>
      <br></br>

      <div
        style={{
          color: "white",
          fontSize: "27px",
          width: "750px",
          border: "15px solid #40739e",
          padding: "50px",
        }}
      >
        <h2 style={{ fontFamily: "Poppins" }}>
          Upload the lung auscultation sound files here:
        </h2>
        <br></br>
        {processing ? (
          "Uploading..."
        ) : (
          <div>
            <form
              id="FormId"
              //   action="/multiple-upload"
              method="POST"
              encType="multipart/form-data"
              onSubmit={(event) => {
                submitFile(event);
              }}
            >
              <input
                type="file"
                multiple
                ref={filesRef}
                name="images"
                style={{ fontSize: "23px", fontFamily: "Poppins" }}
              />
              <button
                style={{
                  fontFamily: "Poppins",
                  fontSize: "25px",
                  borderRadius: "7px",
                  backgroundColor: "#c7ecee",
                }}
                type="submit"
                disabled={!enableStart}
                id={"submitButton"}
              >
                Submit
              </button>
              <br></br>
              <br></br>
            </form>
          </div>
        )}
        {showDiagnoseButton ? (
          showDiagnosing ? (
            <p style={{ fontFamily: "Poppins", textAlign: "center" }}>
              Diagnosing the audio files and fetching AI generated results...
            </p>
          ) : (
            <button
              onClick={diagnose}
              disabled={showDiagnosing}
              style={{
                fontFamily: "Poppins",
                fontSize: "25px",
                borderRadius: "7px",
                backgroundColor: "#c7ecee",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Diagnose
            </button>
          )
        ) : null}
        {/* {showDiagnoseButton ? (
        showDiagnosing ? (
          <p>Analysing files and conducting diagnosis</p>
        ) : (
          <p>hi</p>
        )
      ) : null} */}
        <div
          style={{
            fontFamily: "Poppins",
            display: "flex",
            justifyContent: "center",
            color: "#f0932b",
            fontSize: "35px",
            fontStyle: "bold",
          }}
        >
          {" "}
          {stateReport}
        </div>
      </div>
      <br></br>
      <br></br>
      <hr></hr>
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
}

export default Diagnose;
