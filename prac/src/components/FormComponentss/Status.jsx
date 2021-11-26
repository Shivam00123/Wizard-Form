import React from "react";
import { connect } from "react-redux";
import "./FormStyle/status.css";

function Status({ currentStep }) {
  return (
    <div className="StatusTopDiv">
      <div className="status">
        <h4
          className="first"
          style={{ fontSize: currentStep === "step1" ? "1.1rem" : "1rem" }}
        >
          StepOne
        </h4>
        <div className="lineDiv">
          <div
            className="centerO"
            style={{
              border: currentStep === "step1" ? "4px solid #1b4d89" : "",
              margin: 0,
            }}
          ></div>
          <div
            className="lineStart"
            style={{
              border: currentStep === "step1" ? "2px solid #1b4d89" : "",
            }}
          ></div>
        </div>
      </div>
      <div className="status">
        <h4 style={{ fontSize: currentStep === "step2" ? "1.1rem" : "1rem" }}>
          StepTwo
        </h4>
        <div className="lineDiv">
          <div
            className="lineStart"
            style={{
              border: currentStep === "step2" ? "2px solid #1b4d89" : "",
            }}
          ></div>
          <div
            className="centerO"
            style={{
              border: currentStep === "step2" ? "4px solid #1b4d89" : "",
              margin: 0,
            }}
          ></div>
          <div
            className="lineStart"
            style={{
              border: currentStep === "step2" ? "2px solid #1b4d89" : "",
            }}
          ></div>
        </div>
      </div>
      <div className="status">
        <h4 style={{ fontSize: currentStep === "step3" ? "1.1rem" : "1rem" }}>
          StepThree
        </h4>
        <div className="lineDiv">
          <div
            className="lineStart"
            style={{
              border: currentStep === "step3" ? "2px solid #1b4d89" : "",
            }}
          ></div>
          <div
            className="centerO"
            style={{
              border: currentStep === "step3" ? "4px solid #1b4d89" : "",
              margin: 0,
            }}
          ></div>
          <div
            className="lineStart"
            style={{
              border: currentStep === "step3" ? "2px solid #1b4d89" : "",
            }}
          ></div>
        </div>
      </div>
      <div className="status">
        <h4
          className="last"
          style={{ fontSize: currentStep === "step4" ? "1.1rem" : "1rem" }}
        >
          StepFour
        </h4>
        <div className="lineDiv">
          <div
            className="lineStart"
            style={{
              border: currentStep === "step4" ? "2px solid #1b4d89" : "",
            }}
          ></div>
          <div
            className="centerO"
            style={{
              border: currentStep === "step4" ? "4px solid #1b4d89" : "",
              margin: 0,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ currentStep }) {
  return {
    currentStep,
  };
}

export default connect(mapStateToProps)(Status);
