import React from "react";
import {
  Accordion,
  Button,
  Dropdown,
  DropdownButton,
  Offcanvas,
  Uncontrolle,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logoutAction } from "../utils/redux/actions/loginAction";
import { openRoute, protectedRoutes } from "../navigation/paths";
import { useState } from "react";
import "./Header.css";

const Header = (props) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.loginReducer);
  const logoutHandler = () => {
    dispatch(logoutAction());
    props.history.push(openRoute.signIn);
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((s) => !s);
  };

  return (
    <nav className="navbar navbar-light fixed-top">
      <div className="container">
        {isLoggedIn ? (
        <>
        <button className="navbar-toggler" type="button" onClick={handleShow}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <Offcanvas show={show} onHide={handleShow}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                    <Link to="/users" onClick={handleShow} className="nav-link dashboard-link">
                      Dashboard
                    </Link>
                    <Accordion className="mb-2">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Ambulance</Accordion.Header>
                        <Accordion.Body>
                          <LinkContainer onClick={handleShow} to={protectedRoutes.getAllAmbulances}>
                            <Dropdown.Item>Ambulances</Dropdown.Item>
                          </LinkContainer>
                          <LinkContainer onClick={handleShow} to={protectedRoutes.createAmbulance}>
                            <Dropdown.Item>Create Ambulance</Dropdown.Item>
                          </LinkContainer>
                          <LinkContainer onClick={handleShow} to={protectedRoutes.ambulanceCrew}>
                            <Dropdown.Item>Create Ambulance Crew</Dropdown.Item>
                          </LinkContainer>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                    <Accordion className="mb-2">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Pilot OR EMT</Accordion.Header>
                        <Accordion.Body>
                          <LinkContainer onClick={handleShow} to="/create_user">
                            <Dropdown.Item>Create Driver or EMT</Dropdown.Item>
                          </LinkContainer>
                          <LinkContainer onClick={handleShow} to="/sub-link1">
                            <Dropdown.Item>Attendance</Dropdown.Item>
                          </LinkContainer>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                    <Accordion className="mb-2">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Reports</Accordion.Header>
                        <Accordion.Body>
                          <LinkContainer onClick={handleShow} to={protectedRoutes.dailyReport}>
                            <Dropdown.Item>Daily Report</Dropdown.Item>
                          </LinkContainer>
                          <LinkContainer onClick={handleShow} to={protectedRoutes.patentReport}>
                            <Dropdown.Item>Patent Report</Dropdown.Item>
                          </LinkContainer>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                    <Accordion className="mb-2">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Dropdowns</Accordion.Header>
                        <Accordion.Body>
                          <LinkContainer onClick={handleShow} to={protectedRoutes.locationDropdown}>
                            <Dropdown.Item>Add Location</Dropdown.Item>
                          </LinkContainer>
                          <LinkContainer onClick={handleShow} to={protectedRoutes.ambulanceDropdown}>
                            <Dropdown.Item>Add Ambulance</Dropdown.Item>
                          </LinkContainer>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                    <button
                      className="nav-link logout-btn"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  
              </Offcanvas.Body>
            </Offcanvas>
          </ul>
        </div>
        </>
        ) : (
          <>
            <Link to="/sign-in" className="nav-link dashboard-link">
              Login
            </Link>
          </>
        )}
        <Link className="navbar-brand" to={"/users"}>
          <b><span>UnM</span></b>
        </Link>
      </div>
      
    </nav>
  );
};

export default withRouter(Header);
