import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { OnChange } from "react-final-form-listeners";
import Input from "../../utils/inputComponents/Input";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserAction,
  editUserPassword,
} from "../../utils/redux/actions/editUserActions";
import FileInput from "../../utils/inputComponents/FileInput";
import { imageUploadAction } from "../../utils/redux/actions/imageUploadAction";

const EditUser = ({ history }) => {
  const dispatch = useDispatch();
  const userDetailsReducer = useSelector((state) => state.userDetailsReducer);

  const [state, setState] = useState({
    isAdmin: false,
    _id: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    profilePhoto: "",
    bankaccountnumber: "",
    driversLisencesNumber: "",
    adhaarCardNumber: "",
    panCardNumber: "",
    currentAddress: "",
  });
  useEffect(() => {
    if (userDetailsReducer.user) {
      setState({ ...state, ...userDetailsReducer.user });
    }
  }, [userDetailsReducer]);

  const editUserDetailSubmit = (values) => {
    dispatch(editUserAction(values));
  };

  const updatePassword = (values) => {
    dispatch(
      editUserPassword({
        _id: userDetailsReducer.user._id,
        password: values.password,
      })
    );
  };

  const chooseImg = (value, values) => {
    setState({ ...state, ...values });
    dispatch(imageUploadAction(value));
  };

  if (!userDetailsReducer.user) history.goBack();
  return (
    <div className="bg-white">
      <h5>Edit Details</h5>

      <Row>
        {/* Update User Details start */}
        <div className="col-md-6 right-border">
          <Form onSubmit={editUserDetailSubmit} initialValues={state}>
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <h2>Update Driver Details</h2>
                <div className="row">
                  <div className="form-group align-text col-md-6 ">
                    <label>First Name</label>
                    <Field
                      name="firstname"
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      component={Input}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 ">
                    <label htmlFor="lastname">Last Name</label>
                    <Field
                      name="lastname"
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      component={Input}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 ">
                    <label>Email address</label>
                    <Field
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      component={Input}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 ">
                    <label>Adhaar card Number</label>
                    <Field
                      name="adhaarCardNumber"
                      type="text"
                      className="form-control"
                      placeholder="Adhaar card number"
                      component={Input}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 ">
                    <label>Bank Account Number</label>
                    <Field
                      name="bankaccountnumber"
                      type="text"
                      className="form-control"
                      placeholder="Adhaar card number"
                      component={Input}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 ">
                    <label>Drivers Lisence Number</label>
                    <Field
                      name="driversLisencesNumber"
                      type="text"
                      className="form-control"
                      placeholder="Drivers Lisence Number"
                      component={Input}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 ">
                    <label>Current Address</label>
                    <Field
                      name="currentAddress"
                      type="text"
                      className="form-control"
                      placeholder="Current Address"
                      component={Input}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 ">
                    <label>Pan Card Number</label>
                    <Field
                      name="panCardNumber"
                      type="text"
                      className="form-control"
                      placeholder="Pan Card Number"
                      component={Input}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 ">
                    <label>Phone Number</label>

                    <Field
                      name="phonenumber"
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      component={Input}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Submit
                </button>
              </form>
            )}
          </Form>
        </div>
        {/* Update Password START */}
        <div className="col-md-6">
          <Form onSubmit={updatePassword}>
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <h2>Update Driver Password</h2>
                <div className="form-group align-text col-md-6 offset-3">
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    component={Input}
                  />
                </div>
                <div className="form-group align-text col-md-6 offset-3 mb-btn">
                  <label>Confirm Password</label>
                  <Field
                    name="confirm-password"
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    component={Input}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Submit
                </button>
              </form>
            )}
          </Form>
        </div>
      </Row>
    </div>
  );
};

export default EditUser;
