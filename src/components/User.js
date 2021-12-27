import React from "react";

const User = ({ record, onclick, ind, editUser }) => {
  return (
    <>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 p-2">
        <div className="card">
          <div className="card-body">
            <a className="card-link" onClick={() => onclick(ind)}>
              <h5 className="card-title title" >
                {record.firstname} {record.lastname}
                {/* &nbsp; */}
                {/* <span
                  className={`dot ${record.active ? "active" : "in-active"}`}
                ></span> */}
              </h5>
            </a>
            <div className="card-text">
                <span className="cardContent">
                  <strong>Phone Number - </strong>
                  {record.phonenumber}
                </span> <br />
                <span className="cardContent">
                  <strong>Email - </strong>
                  {record.email}
                </span>
                {/* <a className="card-link" onClick={() => onclick(ind)}>
                  <i className="fas fa-info-circle"></i>  More Information
                </a> */}
            </div>
          </div>
          <div className="card-footer">
            <a className="card-link text-success" onClick={() => editUser(ind)}>
              <i className="fas fa-pen"></i> Edit Details
            </a>
            <a href="#" className="card-link text-danger">
              <i className="fas fa-trash-alt"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
