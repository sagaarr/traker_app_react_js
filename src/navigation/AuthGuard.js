import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { openRoute } from "./paths";

function findCommonElement(array1, array2) {
  // Loop for array1
  for (let i = 0; i < array1.length; i++) {
    // Loop for array2
    for (let j = 0; j < array2.length; j++) {
      // Compare the element of each and
      // every element from both of the
      // arrays
      if (array1[i] === array2[j]) {
        // Return if common element found
        return true;
      }
    }
  }

  // Return if no common element exist
  return false;
}
const AuthGuard = ({
  Component,
  path,
  exact = false,
  requiredRoles,
}) => {
  const isAuth = useSelector((state) => state.loginReducer);
  const { loginSuccess, data } = isAuth;

  let userHasRequiredRole = false;

  // debugger;
  if (loginSuccess) {
    userHasRequiredRole = findCommonElement(requiredRoles, [data.role]);
  }
  const message = userHasRequiredRole
    ? "Please Login to view this page"
    : "You can't be here!";
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        loginSuccess && userHasRequiredRole ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: userHasRequiredRole
                ? openRoute.login
                : openRoute.fourOfour,
              state: {
                message,
                requestedPath: path,
              },
            }}
          />
        )
      }
    />
  );
};

export default AuthGuard;