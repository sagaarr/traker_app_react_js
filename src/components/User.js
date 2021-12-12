import React from "react";

const User = ({ record, onclick, ind, editUser }) => {
  return (
    <>
      <div className="card" style={{ width: "42rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {record.firstname} {record.lastname}
            &nbsp;
            {/* <span
              className={`dot ${record.active ? "active" : "in-active"}`}
            ></span> */}
          </h5>
          <div className="card-text">
            <ul>
              <li className="cardContent">
                <strong>Phone Number -</strong>
                {record.phonenumber}
              </li>
              <li className="cardContent">
                <strong>Email -</strong>
                {record.email}
              </li>
              <a className="card-link" onClick={() => onclick(ind)}>
                More Information
              </a>
              <a className="card-link" onClick={() => editUser(ind)}>
                Edit Details
              </a>
              <a href="#" className="card-link">
                Delete
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
