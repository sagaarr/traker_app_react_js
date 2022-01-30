import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAmbulanceAndUserDetailsAction } from '../../../utils/redux/actions/userListAction';
import AccordianLoader from '../../../components/AccordianLoader';

const Records = ({location}) => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.getAmbulanceAndUserDetailsReducer);

    useEffect(() => {
        dispatch(getAmbulanceAndUserDetailsAction(location))
    }, [location]);

  return (
    <div>
       {
          loading ?  <AccordianLoader/>
          :
          !loading && !error ? 
          data.map((details) => (
              <div className="mt-4">
                 <h4>{details.ambulaceDetails.veichelNumber}</h4>
              </div>
          ))
          : <h1>Something went wrong! please try again! </h1>
      }
    </div>
  )
};

export default Records;
