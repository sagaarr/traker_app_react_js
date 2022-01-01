import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import FileInput from "../../utils/inputComponents/FileInput";
import Input from "../../utils/inputComponents/Input";
import { Row, Col } from "react-bootstrap";
import { OnChange } from "react-final-form-listeners";
import { imageUploadAction } from "../../utils/redux/actions/imageUploadAction";
import { IMG_BASE_URL } from "../../utils/constants/base_url";
import { createUserAction } from "../../utils/redux/actions/createUserAction";
import { protectedRoutes } from "../../navigation/paths";
import { composeValidators, isValidEmail, mustBeNumber, required } from "../../utils/constants/validations";
const AddUser = (props) => {
  const ref = useRef(true);
  const dispatch = useDispatch();
  const createUserReducer = useSelector((state) => state.createUserReducer);
  const uploadImgReducer = useSelector((state) => state.uploadImgReducer);

  // useEffect(() => {
  //   const { data, loadig, error } = uploadImgReducer;
  //   if (data && !loadig && !error) {
  //     setState({ ...state, profilePhoto: `${IMG_BASE_URL}${data.filename}` });
  //   }
  // }, [uploadImgReducer]);

  useEffect(() => {
    if(ref.current) ref.current = false;
    else {
      const {loading,data,error,success} = createUserReducer;
      if(success) {
        props.history.push(protectedRoutes.users);
      }
    }
  },[createUserReducer])

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    password: "",
    email: "",
    profilePhoto: "https://images.pexels.com/photos/6257814/pexels-photo-6257814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    bankaccountnumber: "",
    driversLisencesNumber: "",
    adhaarCardNumber: "",
    panCardNumber: "",
    currentAddress: "",
    isAdmin: false,
  });

  const createUserHandler = (value) => {
    // console.log(value);
    dispatch(createUserAction(value));
  };

  const chooseImg = (value, values) => {
    setState({ ...state, ...values });
    dispatch(imageUploadAction(value));
  };

  return (
    <div className="container mt-top">
      <h3 className="mb-3">Create User</h3>
      <Row>
        {/* Update User Details start */}
        <div className="col-md-12">
          <Form onSubmit={createUserHandler} initialValues={state}>
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                 
                  <div className="form-group align-text col-md-6 mb-3">
                    <label>First Name</label>
                    <Field
                      name="firstname"
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      component={Input}
                      validate={required}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 mb-3">
                    <label htmlFor="lastname">Last Name</label>
                    <Field
                      name="lastname"
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      component={Input}
                      validate={required}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 mb-3">
                    <label>Email address</label>
                    <Field
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      component={Input}
                      validate={composeValidators(required,isValidEmail)}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 mb-3">
                    <label>Adhaar card Number</label>
                    <Field
                      name="adhaarCardNumber"
                      type="text"
                      className="form-control"
                      placeholder="Adhaar card number"
                      component={Input}
                      validate={required}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 mb-3">
                    <label>Bank Account Number</label>
                    <Field
                      name="bankaccountnumber"
                      type="text"
                      className="form-control"
                      placeholder="Adhaar card number"
                      component={Input}
                      validate={required}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 mb-3">
                    <label>Drivers Lisence Number</label>
                    <Field
                      name="driversLisencesNumber"
                      type="text"
                      className="form-control"
                      placeholder="Drivers Lisence Number"
                      component={Input}
                      validate={required}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 mb-3">
                    <label>Current Address</label>
                    <Field
                      name="currentAddress"
                      type="text"
                      className="form-control"
                      placeholder="Current Address"
                      component={Input}
                      validate={required}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 mb-3">
                    <label>Pan Card Number</label>
                    <Field
                      name="panCardNumber"
                      type="text"
                      className="form-control"
                      placeholder="Pan Card Number"
                      component={Input}
                      validate={required}
                    />
                  </div>
                  <div className="form-group align-text col-md-6 mb-3">
                    <label>Phone Number</label>

                    <Field
                      name="phonenumber"
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      component={Input}
                      validate={composeValidators(required, mustBeNumber)}
                    />
                  </div>
                  <div className="form-group align-text col-md-6">
                    <label>Password</label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="password"
                      component={Input}
                      validate={required}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-5"
                >
                  Submit
                </button>
                {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
              </form>
            )}
          </Form>
        </div>
      </Row>
    </div>
  );
};

export default AddUser;
