import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../components/User";
import { userListAction } from "../../utils/redux/actions/userListAction";
import "./Users.css";
import Loader from "../../components/Loader";
import UserDetails from "../../components/UserDetails";
import { editUserDetailsAction } from "../../utils/redux/actions/editUserActions";
import { Form, InputGroup } from "react-bootstrap";
import AccordianBlockDevice from "../../components/Accordian/AccordianBlockDevice";
import Locations from "./parts/Locations";

const Users = ({ history }) => {
  // const dispatch = useDispatch();
  // const { loading, error, data } = useSelector((state) => state.userListReducer);

  // const [show, setShow] = useState(false);

  // const [userData, setuserData] = useState({
  //   active: undefined,
  //   adhaarCardNumber: "",
  //   bankaccountnumber: "",
  //   currentAddress: "",
  //   driversLisencesNumber: "",
  //   email: "",
  //   firstname: "",
  //   lastname: "",
  //   panCardNumber: "",
  //   phonenumber: "",
  //   profilePhoto: "",
  // });

  // const onHide = () => setShow(!show);

  // const editDetails = (index) => {
  //   dispatch(editUserDetailsAction(data[index]));
  //   history.push(`/edit_driver_details/`);
  // };

  // const clickHandler = (index) => {
  //   setuserData({ ...userData, ...data[index] });
  //   onHide();
  // };

  // useEffect(() => {
  //   dispatch(userListAction());
  // }, []);

  return (
    <>
      {/* {loading && !error && <Loader />} */}
      {/* <div className="container mt-top">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h2>Users</h2>
          </div>
          <Form>
            <div className="row mb-3 flex-row-reverse">
              <Form.Group className="col-md-4" controlId="validationFormSearch">
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-search"></i></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search User"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </Form>
        </div>
        <div className="row gx-5">
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
      <UserDetails show={show} onHide={onHide} record={userData} /> */}
 <div className="container mt-top">
   <div className="mb-4">
   <AccordianBlockDevice 
       blockTitle={'zone-2'}
       accordianHeader={'Click here to See locations from Zone 2'}
   >
     <Locations value={'zone-2'}/>
   </AccordianBlockDevice>
   </div>

   <div className="mb-4">
   <AccordianBlockDevice 
       blockTitle={'zone-3'}
       accordianHeader={'Click here to See locations from Zone 3'}
   >
     <Locations value={'zone-3'}/>
   </AccordianBlockDevice>
   </div>
 
   <div className="mb-4">
   <AccordianBlockDevice 
       blockTitle={'zone-4'}
       accordianHeader={'Click here to See locations from Zone 4'}
   >
     <Locations value={'zone-4'}/>
   </AccordianBlockDevice>
   </div>

 </div>
    </>
  );
};

export default Users;
