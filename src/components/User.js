import React from 'react'

const User = ({record}) => {
    return (
     <div className="card" style={{width: '42rem'}}>
  <div className="card-body">
    <div className="card-header-content">
    <span>*</span>
    <h5 className="card-title">{record.firstname}{" "}{record.lastname}</h5>
    </div>
    
    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <div className="card-text">
      <ul>
      <li className="cardContent" ><strong>Phone Number -</strong>{record.phonenumber}</li>
      <li className="cardContent"><strong>Email -</strong>{record.email}</li>
      <li className="cardContent"><strong>Pan card -</strong> {record.panCardNumber}</li>
      <li className="cardContent"><strong>Driver Lisence number-</strong> {record.driversLisencesNumber}</li>
      <li className="cardContent"><strong>Current Address-</strong> {record.currentAddress}</li>
      </ul>
    </div>
  </div>
</div>

    )
}

export default User
