import React, { useEffect, useRef, useState } from 'react';
import { Field, Form } from "react-final-form";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import 'react-dropdown/style.css';
import { createAmbulanceAction } from '../../utils/redux/actions/ambulance/ambulanceAction';
import { userListAction } from '../../utils/redux/actions/userListAction';
import Loader from '../../components/Loader';
import { composeValidators, datePickerValidator, mustBeNumber, required, validateNumberPlate } from '../../utils/constants/validations';
import { protectedRoutes } from '../../navigation/paths';
import { DatePickerAdapter } from '../../components/DatePickerAdaptor';

const CreateAmbulance = (props) => {
    const ref = useRef(true);
    const dispatch = useDispatch();
    const createAmbulanceReducer = useSelector((state) => state.createAmbulanceReducer);
    
    useEffect(() => {
        if(ref.current) ref.current = false;
        else {
            const {data, loading, success} = createAmbulanceReducer;
            if(success) props.history.push(protectedRoutes.getAllAmbulances);
        }
    },[createAmbulanceReducer])

    const createAmbulance = (value) => {
        dispatch(createAmbulanceAction(value));
    }

    return (
        <>
         <div className="bg-white">
           <h5>Create Ambulance Crew</h5>
           <Row>
             <div className="col-md-12" style={{ padding: "19px 110px" }}>
               <Form onSubmit={createAmbulance} >
                 {({ handleSubmit, values, errors, touched }) => (
                   <form onSubmit={handleSubmit}>
                     <div className="row">
                      
                       <div className="form-group align-text col-md-6 ">
                         <label>Vehicle Number (expected format - MH 12 AA 1234)</label>  
                         <Field name="veichelNumber" id="veichelNumber" className="form-control" component="input" validate={composeValidators(required,validateNumberPlate)} />
                         {touched.veichelNumber && errors.veichelNumber ? <span className="error">*{errors.veichelNumber}</span>:""}
                       </div>
                       
                       <div className="form-group align-text col-md-6 ">
                         <label htmlFor="driver">Chassis Number</label>
                         <Field name="chassisNumber" className="form-control" component="input" validate={required} />
                         {touched.chassisNumber && errors.chassisNumber ? <span className="error">*{errors.chassisNumber}</span>:""}
                       </div>

                       <div className="form-group align-text col-md-6 ">
                         <label>Ambulance Location</label>
                         <Field name="location" className="form-control" component="input" validate={required} />
                         {touched.location && errors.location ? <span className="error">*{errors.location}</span>:""}
                       </div>

                       <div className="form-group align-text col-md-6 ">
                         <label>State</label>
                         <Field name="state" className="form-control" component="input" validate={required} />
                         {touched.state && errors.state ? <span className="error">*{errors.state}</span>:""}
                       </div>
                       <div className="form-group align-text col-md-6 ">
                         <label>Zone</label>
                         <Field name="zone" className="form-control" component="input" validate={required} />
                         {touched.zone && errors.zone ? <span className="error">*{errors.zone}</span>:""}
                       </div>
                       
                       <div className="form-group align-text col-md-6 ">
                         <label>Insurance Renual</label>
                         <Field className="form-control" name="insuranceRenual" validate={datePickerValidator} dateFormat="dd/MM/yyyy" component={DatePickerAdapter} />
                         {touched.insuranceRenual && errors.insuranceRenual ? <span className="error">*{errors.insuranceRenual}</span>:""}
                       </div>
                       
                       <div className="form-group align-text col-md-6 ">
                         <label>Fitness Renual</label>
                         <Field name="fitnessRenual" className="form-control" validate={datePickerValidator} dateFormat="dd/MM/yyyy" component={DatePickerAdapter} />
                         {touched.fitnessRenual && errors.fitnessRenual ? <span className="error">*{errors.fitnessRenual}</span>:""}
                       </div>

                       <div className="form-group align-text col-md-6 ">
                         <label>AnnualTax</label>
                         <Field name="annualTax" className="form-control"  validate={composeValidators(datePickerValidator,mustBeNumber)} component="input" />
                         {touched.annualTax && errors.annualTax ? <span className="error">*{errors.annualTax}</span>:""}
                       </div>
                       
                       <div className="form-group align-text col-md-6 ">
                         <label>Service Date</label>
                         <Field name="serviceDate" className="form-control" validate={datePickerValidator} dateFormat="dd/MM/yyyy" component={DatePickerAdapter}  />
                         {touched.serviceDate && errors.serviceDate ? <span className="error">*{errors.serviceDate}</span>:""}
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
export default CreateAmbulance
