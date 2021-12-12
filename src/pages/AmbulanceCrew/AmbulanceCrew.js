import React, { useEffect, useRef, useState } from 'react';
import { Field, Form } from "react-final-form";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import 'react-dropdown/style.css';
import { createAmbulanceCrewAction, getAmbulanceAction } from '../../utils/redux/actions/ambulance/ambulanceAction';
import { userListAction } from '../../utils/redux/actions/userListAction';
import Loader from '../../components/Loader';
import { required } from '../../utils/constants/validations';
import { protectedRoutes } from '../../navigation/paths';

const AmbulanceCrew = (props) => {
    const ref = useRef(true);
    const dispatch = useDispatch();
    const ambulanceReucer = useSelector((state) => state.ambulanceReducer);
    const users = useSelector((state) => state.userListReducer);
    const createCrewReducer = useSelector((state) => state.createCrewReducer);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getAmbulanceAction());
        dispatch(userListAction());
    },[]);

    useEffect(() => {
        if(ref.current) ref.current = false;
        else {
            const {loading, data, success} = createCrewReducer
            if(loading) setLoading(true);
            else setLoading(false);
            if(success)  props.history.push(protectedRoutes.users);
            
        }
    },[createCrewReducer])

    const createCrew = (value) => {
        dispatch(createAmbulanceCrewAction(value))
    }

    return (
       <>
       {ambulanceReucer.loading ||  loading && <Loader/>}
        <div className="bg-white">
          <h5>Create Ambulance Crew</h5>
          <Row>
            <div className="col-md-12" style={{ padding: "19px 110px" }}>
              <Form onSubmit={createCrew} >
                {({ handleSubmit, values, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                     
                      <div className="form-group align-text col-md-12 ">
                        <label>Select Ambulance</label>
                        
                        <Field name="ambulanceId" className="form-control" component="select" validate={required}>
                                <option value="" >Select Ambulance</option>
                            {

                                 ambulanceReucer.data.map((value) => {
                                     return <option value={value._id}>{value.veichelNumber}</option>
                                 })
                            }
                        </Field>
                        {touched.ambulanceId && errors.ambulanceId ? <span className="error">*{errors.ambulanceId}</span>:""}
                      </div>
                      <div className="form-group align-text col-md-6 ">
                        <label htmlFor="driver">Select Driver</label>
                        <Field name="driver" className="form-control" component="select" validate={required}>
                        <option value="">Select Driver</option>
                            {
                                 users.data.map((value) => (
                                    <option value={value._id}>
                                        {value.firstname} {value.lastname}
                                    </option>
                                ))
                            }
                        </Field>
                        {touched.driver && errors.driver ? <span className="error">*{errors.driver}</span>:""}
                      </div>
                      <div className="form-group align-text col-md-6 ">
                        <label>Select EMT</label>
                        <Field name="pilot" className="form-control" component="select" validate={required}>
                        <option value="">Select EMT</option>
                            {
                                 users.data.map((value) => (
                                    <option value={value._id}>
                                        {value.firstname} {value.lastname}
                                    </option>
                                ))
                            }
                        </Field>
                        {touched.pilot && errors.pilot ? <span className="error">*{errors.pilot}</span>:""}
                      </div>

                      <div className="form-group align-text col-md-6 ">
                        <label>Shift time and details for refrence</label>
                        <Field name="shift" className="form-control" component="select" validate={required} component="input" />
                        {touched.shift && errors.shift ? <span className="error">*{errors.shift}</span>:""}
                      </div>
                     </div> 
    
                    <button type="submit" className="btn btn-primary btn-lg btn-block mt-5">Submit</button>
                  </form>
                )}
              </Form>
            </div>
          </Row>
        </div>
       </>
      );
}

export default AmbulanceCrew
