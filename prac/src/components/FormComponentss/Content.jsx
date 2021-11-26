import React from "react";
import { connect } from "react-redux";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Submit from "./Submit";

function Content({ currentStep }) {
  return (
    <div className="FormContainer">
      {currentStep === "step1" && <Step1 />}
      {currentStep === "step2" && <Step2 />}
      {currentStep === "step3" && <Step3 />}
      {currentStep === "step4" && <Step4 />}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentStep: state.currentStep,
  };
}

export default connect(mapStateToProps)(Content);
