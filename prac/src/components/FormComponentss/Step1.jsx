import React, { useEffect, useState } from "react";
import "./FormStyle/step1.css";
import { connect, useDispatch } from "react-redux";
import {
  changeStep,
  updateDetailsFirstName,
  updateDetailslastName,
} from "../../actions";
import { useFormik } from "formik";

function Step1(props) {
  const { newFirstName, newLastName } = props;
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(true);
  const handleMoveForward = () => {
    dispatch(changeStep("step2"));
  };

  const formik = useFormik({
    initialValues: {
      firstName: newFirstName,
      lastName: newLastName,
    },
    onSubmit: (values) => {
      if (values.firstName && values.lastName) {
        dispatch(
          updateDetailsFirstName(
            values.firstName.charAt(0).toUpperCase() + values.firstName.slice(1)
          )
        );
        dispatch(
          updateDetailslastName(
            values.lastName.charAt(0).toUpperCase() + values.lastName.slice(1)
          )
        );
        handleMoveForward();
      }
    },
    validate: (values) => {
      let errors = {};
      if (values.firstName) {
        if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(values.firstName)) {
          errors.firstName = "Not valid name";
        } else if (values.firstName.length > 100) {
          errors.firstName = "Name too long must be only 50 characters";
        } else if (values.firstName.length < 3) {
          errors.firstName = "Name too short must be atleast three characters";
        }
      }
      if (values.lastName) {
        if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(values.lastName)) {
          errors.lastName = "Not valid surname";
        } else if (values.lastName.length > 100) {
          errors.lastName = "Surname too long must be only 50 characters";
        } else if (values.lastName.length < 3) {
          errors.lastName =
            "Surname too short must be atleast three characters";
        }
      }
      return errors;
    },
  });
  useEffect(() => {
    if (formik.values.firstName && formik.values.lastName) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [formik.values.firstName, formik.values.lastName]);

  // useEffect(() => {
  //   formik.values.firstName = newFirstName;
  //   formik.values.lastName = newLastName;
  // }, [newFirstName, newLastName]);

  return (
    <div className="stepOneContainer">
      <span className="info">Tell us about You!</span>
      <form className="formContainer" onSubmit={formik.handleSubmit}>
        <div className="inputDiv firstInp">
          <span className="inputLabel">First Name</span>
          <input
            name="firstName"
            placeholder="First Name"
            className="inp"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && (
            <span className="error">{formik.errors.firstName}</span>
          )}
        </div>
        <div className="inputDiv lastInp">
          <span className="inputLabel">Last Name</span>
          <input
            name="lastName"
            placeholder="Last Name"
            className="inp"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && (
            <span className="error">{formik.errors.lastName}</span>
          )}
        </div>
        {disable ? (
          <button
            disabled
            style={{ cursor: "not-allowed" }}
            onClick={() => handleMoveForward()}
            className="btn"
          >
            Next
          </button>
        ) : (
          <button type="submit" className="btn">
            Next
          </button>
        )}
      </form>
    </div>
  );
}

function mapStateToProps({ newFirstName, newLastName }) {
  return {
    newFirstName,
    newLastName,
  };
}
export default connect(mapStateToProps)(Step1);
