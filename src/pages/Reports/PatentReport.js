import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDailyReport, getPatentReport } from "../../utils/redux/actions/reportAction";
import "./style.css";
import Moment from "react-moment";
import DatePicker from "react-date-picker";
import { Field, Form } from "react-final-form";
import DateInput from "../../utils/inputComponents/DateInput";


const PatentReport = () => {
    const dispatch = useDispatch();
    const { data, loading, success , message} = useSelector(
      (state) => state.patentReport
    );

  
    const handleFormSubmit = (e) => {
      dispatch(getPatentReport(e));
    };
  
    return (
      <div className="container mt-top">
        <Form onSubmit={handleFormSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="row mb-5">
              <div className="col-md-12  mt-5">
                <h2>Patent Report</h2>
              </div>
              <div className="col-md-5">
                <span>Start Date</span>
                <Field
                  className="form-control "
                  name="startDate"
                  component={DateInput}
                />
              </div>
              <div className="col-md-5">
              <span>End Date</span>
                <Field
                  className="form-control "
                  name="endDate"
                  component={DateInput}
                />
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
        <div className="table-responsive">
          <table className="table table-striped report-table">
            <thead className="thead-light">
              <tr>
                <th>Location</th>
                <th>Vehicle No</th>
                <th>Accident Date</th>
                <th>Call Receive Time </th>
                <th>Attended Time</th>
                <th>Hospital Time</th>
                <th>Accident Highway number</th>
                <th>Spot Distance from your Location</th>
                <th>Reaching Time on Spot </th>
                <th>No Of patient attended</th>
                <th>Total Patent Count</th>
                <th>Enjured Patent Count</th>
                <th>Fatal Patent Count</th>
                <th>Hospital Reaching Time</th>
                <th>Return Location Time</th>
                <th>Start KM</th>
                <th>End KM</th>
              </tr>
            </thead>
            <tbody>
          {success &&
            data?.map((report) => (
              <tr key={report._id}>
                <td>{report.ambulanceId.location}</td>
                <td>{report.ambulanceId.veichelNumber}</td>
                <td><Moment format="DD/MM/YYYY">{report.createdAt}</Moment></td>
                <td><Moment format="HH:MM">{report.callReceiveTime}</Moment></td>
                <td><Moment format="HH:MM">{report.attendTime}</Moment></td>
                <td><Moment format="HH:MM">{report.hospitalTime}</Moment></td>
                <td>{report.highwayNumber}</td>
                <td>-</td>
                <td>-</td>
                <td>{report.totalPatentCount}</td>
                <td>{report.totalPatentCount}</td>
                <td>{report.enjuredPatentCount}</td>
                <td>{report.fatalPatentCount}</td>
                <td><Moment format="HH:MM">{report.hospitalTime}</Moment></td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
            ))}
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
export default PatentReport
