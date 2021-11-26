import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  changeStep,
  updateDetailsEmail,
  updateDetailsPassword,
} from "../../actions";
import { useFormik } from "formik";

function Step2({ newEmail, newPassword }) {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(true);

  const handleStepChangeBackward = () => {
    dispatch(changeStep("step1"));
  };

  const formik = useFormik({
    initialValues: {
      email: newEmail,
      password: newPassword,
      confirmPassword: newPassword,
    },
    onSubmit: (values) => {
      dispatch(changeStep("step3"));
      dispatch(updateDetailsEmail(values.email));
      dispatch(updateDetailsPassword(values.password));
    },
    validate: (values) => {
      let errors = {};
      if (values.email) {
        if (
          !values.email.match(
            /^\s*[\w\-+_]+(\.[\w\-+_]+)*@[\w\-+_]+\.[\w\-+_]+(\.[\w\-+_]+)*\s*$/
          )
        ) {
          errors.email = "Invalid Email";
        }
      }
      if (values.password) {
        if (values.password.length < 6) {
          errors.password =
            "Password must be greater than 6 and less than 20 character long";
        }
      }
      if (values.confirmPassword) {
        if (values.confirmPassword !== values.password) {
          errors.confirmPassword = "Password must match";
        }
      }
      return errors;
    },
  });

  useEffect(() => {
    if (formik.values.email && formik.values.password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [formik.values.email, formik.values.password]);

  return (
    <div className="stepOneContainer">
      <span className="info">Account Details</span>
      <form className="formContainer" onSubmit={formik.handleSubmit}>
        <div className="inputDiv firstInp" style={{ marginTop: "10px" }}>
          <span className="inputLabel">Email</span>
          <input
            placeholder="Email"
            name="email"
            value={formik.values.email}
            className="inp"
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <span className="error">{formik.errors.email}</span>
          )}
        </div>
        <div className="inputDiv" style={{ marginTop: "20px" }}>
          <span className="inputLabel">Password</span>
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="inp"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && (
            <span className="error">{formik.errors.password}</span>
          )}
        </div>
        <div className="inputDiv lastInp" style={{ marginTop: "20px" }}>
          <span className="inputLabel">Confirm Password</span>
          <input
            disabled={!formik.values.password}
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            className="inp"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && (
            <span className="error">{formik.errors.confirmPassword}</span>
          )}
        </div>
        <div className="btnWrap" style={{ marginBottom: "0" }}>
          <button
            className="btnstep2"
            onClick={() => handleStepChangeBackward()}
          >
            Back
          </button>
          {disable ? (
            <button
              disabled
              style={{ cursor: "not-allowed" }}
              className="btn step2button"
            >
              Next
            </button>
          ) : (
            <button type="submit" className="btn step2button">
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    newEmail: state.newEmail,
    newPassword: state.newPassword,
  };
}

export default connect(mapStateToProps)(Step2);
