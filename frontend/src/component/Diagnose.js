import React from "react";
import {Helmet} from "react-helmet";
import "../index.css";
const Diagnose = () => {
  return (
    <>
      <div style={{ color: "white" ,}}>
        <h4>Upload the lung sound files here:</h4>
        <form
          id="FormId"
          action="/multiple-upload"
          method="POST"
          enctype="multipart/form-data"
        >
          <div class="form-group">
            <label for="example-input-file"> </label>
            <input
              type="file"
              name="multi-files"
              multiple
              id="input-multi-files"
              class="form-control-file border"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <p id="response_message">No files uploaded</p>
        <button id="python-btn" class="btn btn-primary" hidden="true">
          Diagnose
        </button>
        <h4 id="output"></h4>
      </div>
    </>
  );
};

export default Diagnose;
