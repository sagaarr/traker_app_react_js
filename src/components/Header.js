import React from "react";
import { Dropdown, DropdownButton, Uncontrolle } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logoutAction } from "../utils/redux/actions/loginAction";
import { openRoute, protectedRoutes } from "../navigation/paths";

const Header = (props) => {

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.loginReducer);

  const logoutHandler = () => {
    dispatch(logoutAction())
    props.history.push(openRoute.signIn)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/users"}>
          UnM
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            {isLoggedIn ? (
              <>
              
                <DropdownButton id="dropdown-basic-button" title="Ambulance" className="droopdown-btn">
                <LinkContainer to={protectedRoutes.getAllAmbulances}><Dropdown.Item >Ambulances</Dropdown.Item></LinkContainer>
                <LinkContainer to={protectedRoutes.createAmbulance}><Dropdown.Item >Create Ambulance</Dropdown.Item></LinkContainer>
                <LinkContainer to={protectedRoutes.ambulanceCrew}><Dropdown.Item >Create Ambulance Crew</Dropdown.Item></LinkContainer>
                </DropdownButton>
                
                <DropdownButton id="dropdown-basic-button" title="Crew" className="droopdown-btn">
                <LinkContainer to="/create_user"><Dropdown.Item >Create Driver or EMT</Dropdown.Item></LinkContainer>
                <LinkContainer to="/sub-link1"><Dropdown.Item >Attendance</Dropdown.Item></LinkContainer>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Reports" className="droopdown-btn">
                <LinkContainer to={protectedRoutes.dailyReport}><Dropdown.Item >Daily Report</Dropdown.Item></LinkContainer>
                <LinkContainer to={protectedRoutes.patentReport}><Dropdown.Item >Patent Report</Dropdown.Item></LinkContainer>
                </DropdownButton>
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className="nav-link"
                    onClick={logoutHandler}
                  >
                    Logout
                  </a>
                </li>
              
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Header);
