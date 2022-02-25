import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationsAction } from '../../../utils/redux/actions/userListAction';
import AccordianBlockDevice from "../../../components/Accordian/AccordianBlockDevice";
import Records from './Records';
import AccordianLoader from '../../../components/AccordianLoader';
import { useRef } from 'react';

const Locations = ({ value }) => {
    const deleteGroupRef = useRef(true);
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.userLocationsReducer);
    const deleteGroupReducer = useSelector((state) => state.deleteGroupReducer);


    useEffect(() => {
        if (deleteGroupRef.current) deleteGroupRef.current = false;
        else {
            if (!deleteGroupReducer.loading) {
                dispatch(getLocationsAction(value))
            }
        }
    }, [deleteGroupReducer.data]);


    useEffect(() => {
        dispatch(getLocationsAction(value))
    }, [value]);

    return <div>
        {
            loading && deleteGroupReducer.loading ? <AccordianLoader />
                :
                !loading && !error ?
                    data.map((location) => (
                        <div className="mt-4" key={location.location}>
                            <AccordianBlockDevice
                                blockTitle={location.location}
                                accordianHeader={`See Ambulance details and User details on ${location.location}`}
                            >
                                <Records location={location.location}  />
                            </AccordianBlockDevice>
                        </div>
                    ))
                    : <h1>Something went wrong! please try again! </h1>
        }
    </div>
};


Locations.propTypes = {
    value: PropTypes.string,

}

export default Locations;
