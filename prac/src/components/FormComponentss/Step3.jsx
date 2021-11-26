import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  changeStep,
  updateDetailsAlternate,
  updateDetailsPhone,
} from "../../actions";
import "./FormStyle/step3.css";
import { useFormik } from "formik";

function Step3({ phone, alternate }) {
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState(true);
  const dispatch = useDispatch();
  const handleChangeStepBackward = () => {
    dispatch(changeStep("step2"));
  };

  const formik = useFormik({
    initialValues: {
      phone: phone["Number"],
      alternateNumber: alternate["Number"],
      phoneSelect: phone["Status"],
      alternateSelect: alternate["Status"],
    },

    onSubmit: (values) => {
      const PhoneDetails = {};
      PhoneDetails["Number"] = values.phone;
      PhoneDetails["Status"] = values.phoneSelect;
      if (values.alternateNumber) {
        const AlternateNumberDetails = {};
        AlternateNumberDetails["Number"] = values.alternateNumber;
        AlternateNumberDetails["Status"] = values.alternateSelect;
        dispatch(updateDetailsAlternate(AlternateNumberDetails));
      }

      dispatch(changeStep("step4"));
      dispatch(updateDetailsPhone(PhoneDetails));
    },
    validate: (values) => {
      let errors = {};
      if (!values.phone.match(/^\d{10}$/)) {
        errors.phone = "No valid phone number";
      }
      if (values.alternateNumber) {
        if (!values.alternateNumber.match(/^\d{10}$/)) {
          errors.alternateNumber = "No valid phone Number";
        }
      }
      return errors;
    },
  });

  useEffect(() => {
    if (
      !formik.values.phone ||
      formik.errors.phone ||
      formik.values.phoneSelect === undefined ||
      formik.values.phoneSelect === "Select"
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    if (formik.values.phoneSelect === "Select") {
      setDisable(true);
    }
    if (formik.values.alternateNumber) {
      console.log("uE", formik.values.alternateSelect);
      if (
        !formik.values.alternateNumber ||
        formik.errors.alternateNumber ||
        formik.values.alternateSelect === undefined ||
        formik.values.alternateSelect === "Select"
      ) {
        setDisable(true);
      } else {
        setDisable(false);
      }
    }
    setError(!error);
  }, [formik.values]);

  return (
    <div className="stepOneContainer">
      <span className="info">Contact Details</span>
      <form className="formContainer" onSubmit={formik.handleSubmit}>
        <div className="inputSelectWrapper">
          <div className="inputWrapper">
            <input
              placeholder="Phone number"
              className="inp"
              name="phone"
              type="text"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </div>
          <div className="selectionWrapper">
            <select
              disabled={!formik.values.phone}
              onChange={formik.handleChange}
              name="phoneSelect"
              value={formik.values.phoneSelect}
              className="select inputLabel"
            >
              <option selected disabled>
                Select
              </option>
              <option id="Mobile">Mobile</option>
              <option id="Home">Home</option>
              <option id="Telephone">Telephone</option>
            </select>
          </div>
          {formik.errors.phone && (
            <span className="error">{formik.errors.phone}</span>
          )}
        </div>
        <div className="inputSelectWrapper">
          <div className="inputWrapper">
            <input
              disabled={!formik.values.phone}
              placeholder="Phone number (optional)"
              className="inp"
              name="alternateNumber"
              type="text"
              value={formik.values.alternateNumber}
              onChange={formik.handleChange}
            />
          </div>
          <div className="selectionWrapper">
            <select
              disabled={!formik.values.alternateNumber}
              name="alternateSelect"
              onChange={formik.handleChange}
              value={formik.values.alternateSelect}
              className="select inputLabel"
            >
              <option selected disabled>
                Select
              </option>
              <option>Home</option>
              <option>Telephone</option>
              <option>Mobile</option>
            </select>
          </div>
          {formik.errors.alternateNumber && (
            <span className="error">{formik.errors.alternateNumber}</span>
          )}
        </div>
        <button className="btn back" onClick={handleChangeStepBackward}>
          Back
        </button>
        {disable ? (
          <button className="btn" disabled style={{ cursor: "not-allowed" }}>
            Next
          </button>
        ) : (
          <button className="btn" type="submit">
            Next
          </button>
        )}
      </form>
    </div>
  );
}

function mapStateToProps({ phone, alternate }) {
  return {
    phone,
    alternate,
  };
}

export default connect(mapStateToProps)(Step3);
