import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader';
import { getAmbulanceAction } from '../../utils/redux/actions/ambulance/ambulanceAction';
import Ambulance from "../../components/Ambulance";

const Ambulances = () => {
    const dispatch = useDispatch();
    const {data, success, loading} = useSelector((state) => state.ambulanceReducer)
    useEffect(() => {
        dispatch(getAmbulanceAction());
      }, []);

    return (
        <>
          {loading && !success && <Loader />}
          <div className="container mt-top">
        <div className="align-user">
          {
              success && data.map((value, index) => (
                  <Ambulance value={value} index={index} />
              ))
          }
          </div>
          </div>
        </>
    )
}

export default Ambulances
