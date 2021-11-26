import React from "react";
import Status from "./FormComponentss/Status";
import "../style/form.css";
import Content from "./FormComponentss/Content";
import { connect } from "react-redux";
import Submit from "./FormComponentss/Submit";

function Form({ currentStep }) {
  return (
    <div className="formDiv">
      {currentStep !== "submit" ? (
        <>
          <Status />
          <Content />
        </>
      ) : (
        <Submit />
      )}
    </div>
  );
}

function mapStateToProps({ currentStep }) {
  return {
    currentStep,
  };
}
export default connect(mapStateToProps)(Form);
