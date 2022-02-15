import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDailyReport } from "../../utils/redux/actions/reportAction";
import "./style.css";
import Moment from "react-moment";
import DatePicker from "react-date-picker";
import { Field, Form } from "react-final-form";
import DateInput from "../../utils/inputComponents/DateInput";
import { required } from "../../utils/constants/validations";
import { getDropdownList, getStateList } from "../../utils/redux/actions/dropdowns";
import Loader from "../../components/Loader";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Select from "react-dropdown-select"
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import Dropdown from "../../utils/inputComponents/Dropdown";

const DailyReport = () => {
  const dispatch = useDispatch();
  const { data, loading, success, message } = useSelector((state) => state.reportData);
  
  const dropdownListReducer = useSelector((state) => state.dropdownListReducer);
  const dropdownStateListReducer = useSelector((state) => state.dropdownStateListReducer);

  let index = 0;
  useEffect(() => {
    dispatch(getDropdownList("zone"));
    dispatch(getStateList());
  }, []);


  const handleFormSubmit = (e) => {
    dispatch(getDailyReport(e));
  };


  
  return (
    <div className="container mt-top">
      {dropdownListReducer.loading && dropdownStateListReducer.loading  && <Loader/>}
      <Form onSubmit={handleFormSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="row mb-5">
              <div className="col-md-12  mt-5 mb-3">
                <h2>Daily Report </h2>
              </div>
              <div className="col-md-3">
                <span>Date</span>
                <Field
                  className="form-control"
                  name="startDate"
                  component={DateInput}
                />
              </div>
              <div className="col-md-3">
                <span>Select Zone</span>
                <Field 
                name="zone"
                placeholder="Please Select zone"
                dropdownData={['zone-2','zone-3','zone-4']}
                component={Dropdown}
                />
              </div>
              <div className="col-md-3">
                <span>State</span>
                   <Field 
                name="state"
                placeholder="Please Select State"
                textFiled="state"
                dropdownData={dropdownStateListReducer.data}
                component={Dropdown}
                />
              </div>
              <div className="col-md-3 mt-4">
                <span></span>
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        )}
      </Form>
      {data.length !== 0 && success ? (
        <div className="table-responsive">
        <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="table-to-xls"
              filename="tablexls"
              sheet="tablexls"
              buttonText="Download as Excel file"/>
          <table className="table table-striped report-table" id="table-to-xls">
            <thead className="thead-light">
              <tr>
                <th>Sr.No</th>
                <th>Location</th>
                <th>State</th>
                <th>Date</th>
                <th>Shift Time</th>
                <th>EMT</th>
                <th>Pilot</th>
                <th>No Of Calls</th>
                <th>No Of Round</th>
                <th>Call Reading</th>
                <th>Round Reading</th>
                <th>No Of Patients</th>
                <th>Fatal</th>
                <th>PCR Form</th>
                <th>Opening Reading</th>
                <th>Closing Reading</th>
                <th>Total KM</th>
                <th>Diesel Ltr</th>
                <th>Rate</th>
                <th>Amount</th>
                <th>Unifrom /Shoes/ I-Card</th>
                <th>Stock Register</th>
                <th>Diesel Level</th>
                <th>O2 Leval</th>
                <th>PCR Filed</th>
                <th>Mobile Recharge Date</th>
                <th>Vehicle maintenance Date</th>
              </tr>
            </thead>
            <tbody>
            { success && data?.map((reports, index) => {
              return (
                <tr key={index}>
                  <td>{ ++index }</td>
                    <td>
                      {reports._id.ambulaceDetails.location}{" "}
                      <strong>
                        ({reports._id.ambulaceDetails.veichelNumber})
                      </strong>
                    </td>
                    <td>{reports._id.ambulaceDetails.state}</td>
                    <td>
                      {reports._id.date}
                    </td>
                    <td>{reports._id.shift}</td>
              {
                  reports.data?.map(element => (

                    <>
                    <td>{element.EMT.firstname}</td>
                    <td>{element.pilot.firstname}</td>
                    <td>{element.numberOfCalls}</td>
                    <td>{element.numberOfRound}</td>
                    <td>{element.callReading}</td>
                    <td>{element.roundReading}</td>
                    <td>{element.numberOfPatent}</td>
                    <td>{element.fatal}</td>
                    <td>{element.PCRForm}</td>
                    <td>{element.openingReading}</td>
                    <td>{element.closingReading}</td>
                    <td>{ (element.closingReading >= element.openingReading) ? Math.abs(Math.round(element.closingReading - element.openingReading, 2)) : '-' }</td>
                    <td>{element.dieselLtr}</td>
                    <td>{element.rate}</td>
                    <td>{element.amount}</td>
                    <td>{element.uniformAndIdCheck.toString()}</td>
                    <td>{element.stockRegister.toString()}</td>
                    <td>{element.diesel}</td>
                    <td>{element.oxygenLevel}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </>
                  ))
              }
                  </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      ) : !success ? (
        <h5 className="text-danger">{message}</h5>
      ) : (
        <h5 className="text-danger">{message}</h5>
      )}
    </div>
  );
};

export default DailyReport;
