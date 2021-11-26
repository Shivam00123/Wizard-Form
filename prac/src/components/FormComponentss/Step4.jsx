import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { changeStep } from "../../actions";
import "./FormStyle/step4.css";

function Step4({ FirstName, LastName, Email, Phone, AlternateNumber }) {
  const dispatch = useDispatch();
  const redirectToState = (step) => {
    dispatch(changeStep(step));
  };
  return (
    <div className="stepOneContainer">
      <span className="info">All details</span>
      <div className="detailDiv">
        <span className="Tag" onClick={() => redirectToState("step1")}>
          Your Info
        </span>
        <div className="detail">
          <span
            className="key"
            style={{ color: " rgb(65, 64, 64)", marginRight: "20px" }}
          >
            Name
          </span>
          <span className="key Value" style={{ wordBreak: "break-word " }}>
            {FirstName}
            &nbsp;
            {LastName}
          </span>
        </div>
        <span className="Tag" onClick={() => redirectToState("step2")}>
          Account Detail
        </span>
        <div className="detail">
          <span className="key" style={{ color: " rgb(65, 64, 64)" }}>
            Email
          </span>
          <span className="key Value">{Email}</span>
        </div>
        <span className="Tag" onClick={() => redirectToState("step3")}>
          Personal Details
        </span>
        <div className="detail">
          <span className="key" style={{ color: " rgb(65, 64, 64)" }}>
            Phone
          </span>
          <span className="key Value">
            {Phone["Number"]}&nbsp;({Phone["Status"]})
          </span>
        </div>
        {AlternateNumber["Number"] && (
          <div className="detail">
            <span className="key" style={{ color: " rgb(65, 64, 64)" }}>
              Alternate Number
            </span>
            <span className="key Value">
              {AlternateNumber["Number"]}&nbsp;({AlternateNumber["Status"]})
            </span>
          </div>
        )}
      </div>
      <div className="btnWrap btnDiv">
        <button className="btn" onClick={() => dispatch(changeStep("submit"))}>
          Save
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    FirstName: state.newFirstName,
    LastName: state.newLastName,
    Email: state.newEmail,
    Phone: state.phone,
    AlternateNumber: state.alternate,
  };
}
export default connect(mapStateToProps)(Step4);
