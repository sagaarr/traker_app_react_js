import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAmbulanceAndUserDetailsAction } from '../../../utils/redux/actions/userListAction';
import AccordianLoader from '../../../components/AccordianLoader';
import { deleteGroupAction } from '../../../utils/redux/actions/Users';
// import * as team from '.../../../assets/';

const Records = ({ location }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.getAmbulanceAndUserDetailsReducer);
  useEffect(() => {
    dispatch(getAmbulanceAndUserDetailsAction(location))
  }, [location]);

  const deleteUser = (user) => {
    dispatch(deleteGroupAction(user._id))
  }

  return (
    <div className='row' key={location}>
      {
        loading ? <AccordianLoader />
          :
          !loading && !error ?
            data.map((details) => (
              <div className='col-md-6 col-sm-12 mt-4' key={details._id}>
                <div className="card">
                  <div className='card-header'>
                    <img 
                    className='ambulance-img-round' 
                    src={require('../../../assets/images/team.png').default} 
                    alt={details.ambulaceDetails.veichelNumber} 
                    />
                    <h4>{details.ambulaceDetails.veichelNumber}</h4>
                    <span className={details.shift === 'Day' ? "fa fa-sun" : "fa fa-moon"} > {details.shift}</span>
                    <img 
                    className='ambulance-img-round remove-group' 
                    src={require('../../../assets/images/remove.png').default} 
                    alt={details.ambulaceDetails.veichelNumber} 
                    onClick={() => deleteUser(details)}
                    />
                  </div>
                  <div className='card-body'>
                    {
                      details.EMT ?
                        (
                          <div>
                            <h5 className='text-left'>EMT Details:</h5>
                            <div className='text-left'>
                              <b className='name'>Name: {details.EMT.firstname} {details.EMT.lastname}</b> <br />
                              <b>Phone number:</b> {details.EMT.phonenumber} <br />
                              <b>Email:</b> {details.EMT.email} <br />
                              <b>Current Address:</b> {details.EMT.currentAddress}
                            </div>
                          </div>
                        )
                        : <div className='blink-error'>No EMT Assigned!</div>
                    }
                    {
                      details.pilot ?
                        (
                          <div className='mt-4'>
                            <h5 className='text-left'>Pilot Details:</h5>
                            <div className='text-left'>
                              <b className='name'>Name: {details.pilot.firstname} {details.pilot.lastname}</b> <br />
                              <b>Phone number:</b> {details.pilot.phonenumber} <br />
                              <b>Email:</b> {details.pilot.email} <br />
                              <b>Current Address:</b> {details.pilot.currentAddress}
                            </div>
                          </div>
                        )
                        : <div className='blink-error'>No Pilot Assigned!</div>
                    }
                  </div>
                </div>
              </div>
            ))
            : <h1>Something went wrong! please try again! </h1>
      }
    </div>
  )
};

export default Records;
