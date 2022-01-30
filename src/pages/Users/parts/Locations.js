import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationsAction } from '../../../utils/redux/actions/userListAction';
import AccordianBlockDevice from "../../../components/Accordian/AccordianBlockDevice";
import Records from './Records';
import AccordianLoader from '../../../components/AccordianLoader';

const Locations = ({value}) => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.userLocationsReducer);


    useEffect(() => {
        dispatch(getLocationsAction(value))
    },[value]);


  return <div>
      {
          loading ?  <AccordianLoader/>
          :
          !loading && !error ? 
          data.map((location) => (
              <div className="mt-4">
                  <AccordianBlockDevice
              blockTitle={location.location}
              accordianHeader={`See Ambulance details and User details on ${location.location}`}
              >
                  <Records location={location.location}/>
              </AccordianBlockDevice>
              </div>
          ))
          : <h1>Something went wrong! please try again! </h1>
      }
  </div>
};


Locations.propTypes = {
    value:PropTypes.string,

}

export default Locations;
