import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDailyReport } from "../../utils/redux/actions/reportAction";
import "./style.css";
import Moment from "react-moment";
import DatePicker from "react-date-picker";
import { Field, Form } from "react-final-form";
import DateInput from "../../utils/inputComponents/DateInput";
import { required } from "../../utils/constants/validations";
import { getDropdownList } from "../../utils/redux/actions/dropdowns";
import Loader from "../../components/Loader";

const DailyReport = () => {
  const dispatch = useDispatch();
  const { data, loading, success, message } = useSelector(
    (state) => state.reportData
  );
  const dropdownListReducer = useSelector((state) => state.dropdownListReducer);

  useEffect(() => {
    dispatch(getDropdownList("zone"));
  }, []);
  const handleFormSubmit = (e) => {
    dispatch(getDailyReport(e));
  };

  
  return (
    <div className="container mt-top">
      {dropdownListReducer.loading || (loading && <Loader />)}
      <Form onSubmit={handleFormSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="row mb-5">
              <div className="col-md-12  mt-5">
                <h2 style={{ color: "white" }}>Daily Report </h2>
              </div>
              <div className="col-md-5">
                <span style={{ color: "white" }}>Start Date</span>
                <Field
                  className="form-control"
                  name="startDate"
                  component={DateInput}
                />
              </div>
              <div className="col-md-5">
                <span style={{ color: "white" }}>End Date</span>
                <Field
                  className="form-control "
                  name="endDate"
                  component={DateInput}
                />
              </div>

              <div className="col-md-5">
                <span style={{ color: "white" }}>Select Zone</span>
                <Field
                  name="zone"
                  className="form-control"
                  component="select"
                  validate={required}
                >
                  <option value="">Select Ambulance</option>
                  {dropdownListReducer.data.map((value) => {
                    return <option value={value.value}>{value.value}</option>;
                  })}
                </Field>
              </div>

              <div className="col-md-2 mt-4">
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
        <table>
          <thead>
          <tr>
            <th>Location</th>
            <th>Date</th>
            <th>Shift Time</th>
            <th>EMT </th>
            <th>Pilot </th>
            <th>No Of Calls </th>
            <th>No Of Round </th>
            <th>Call Reading</th>
            <th>Round Reading</th>
            {/* <th>No Of Patients</th> */}
            <th>Fatal</th>
            <th>PCR Form Filed</th>
            <th>Opening Reading</th>
            <th>Closing Reading</th>
            {/* <th>Total KM</th>  */}
            <th>Diesel Ltr </th>
            <th>Rate</th>
            <th>Amount</th>
            <th>Unifrom/Shoes/I-Card</th>
            <th>All Registers</th>
            <th>Diesel Level</th>
            <th>O2 Leval</th>
          </tr>
          </thead>
          {success &&
            data?.map((report) => (
              <tr key={report._id}>
                <td>
                  {report.ambulanceDetails.ambulance.location}{" "}
                  <strong>
                    ({report.ambulanceDetails.ambulance.veichelNumber})
                  </strong>
                </td>
                <td>
                  {" "}
                  <Moment format="DD/MM/YYYY">{report.createdAt}</Moment>
                </td>
                <td>{report.ambulanceDetails.shift}</td>

                <td>{report.ambulanceDetails.EMT.firstname}</td>
                <td>{report.ambulanceDetails.driver.firstname}</td>
                <td>{report.numberOfCalls}</td>
                <td>{report.numberOfRound}</td>
                <td>{report.callReading}</td>
                <td>{report.roundReading}</td>
                {/* <td>{report.numberOfPatent}</td> */}
                <td>{report.fatal}</td>
                <td>{report.PCRForm}</td>
                <td>{report.openingReading}</td>
                <td>{report.closingReading}</td>
                <td>{report.dieselLtr}</td>
                <td>{report.rate}</td>
                <td>{report.amount}</td>
                <td>{report.uniformAndIdCheck.toString()}</td>
                <td>{report.stockRegister.toString()}</td>
                <td>{report.diesel}</td>
                <td>{report.oxygenLevel}</td>
              </tr>
            ))}
        </table>
      ) : !success ? (
        <h3 style={{ color: "white" }}>{message}</h3>
      ) : (
        <h3 style={{ color: "white" }}>{message}</h3>
      )}
    </div>
  );
};

export default DailyReport;
