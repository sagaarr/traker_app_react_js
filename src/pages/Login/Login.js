import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { Redirect } from "react-router-dom";
import Input from "../../utils/inputComponents/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../utils/redux/actions/loginAction";
import Loader from "../../components/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, data, error, isLoggedIn } = useSelector(
    (state) => state.loginReducer
  );

  const [formState] = useState({
    email: "",
    password: "",
  });

  const loginSubmitHandler = (values) => {
    dispatch(loginAction(values));
  };

  if (data && isLoggedIn) {
    return <Redirect to="/users" />;
  }

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Form onSubmit={loginSubmitHandler} initialValues={formState}>
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                  <label>Email address</label>
                  <Field
                    type="input"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    component={Input}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    component={Input}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </form>
            )}
          </Form>
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default Login;
