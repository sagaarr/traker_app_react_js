import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../components/User";
import { userListAction } from "../../utils/redux/actions/userListAction";
import "./Users.css";
import Loader from "../../components/Loader";
import UserDetails from "../../components/UserDetails";
import { editUserDetailsAction } from "../../utils/redux/actions/editUserActions";

const Users = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.userListReducer);

  const [show, setShow] = useState(false);

  const [userData, setuserData] = useState({
    active: undefined,
    adhaarCardNumber: "",
    bankaccountnumber: "",
    currentAddress: "",
    driversLisencesNumber: "",
    email: "",
    firstname: "",
    lastname: "",
    panCardNumber: "",
    phonenumber: "",
    profilePhoto: "",
  });

  const onHide = () => setShow(!show);

  const editDetails = (index) => {
    dispatch(editUserDetailsAction(data[index]));
    history.push(`/edit_driver_details/`);
  };

  const clickHandler = (index) => {
    setuserData({ ...userData, ...data[index] });
    onHide();
  };

  useEffect(() => {
    dispatch(userListAction());
  }, []);

  return (
    <>
      {loading && !error && <Loader />}
      <div className="container mt-top">
        <div className="align-user">
          {data.map((val, index) => (
            <User
              key={index}
              record={val}
              ind={index}
              onclick={clickHandler}
              editUser={editDetails}
            />
          ))}
        </div>
      </div>
      <UserDetails show={show} onHide={onHide} record={userData} />
    </>
  );
};

export default Users;
