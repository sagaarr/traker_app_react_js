import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style.css";

const Ambulance = ({ value }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div class="col-md-4 col-sm-12 p-2">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title pt-2">
            Ambulance Number - {value.veichelNumber}
            &nbsp;
          </h5>
        </div>
        <div className="card-body mb-2">
          <div className="card-text">
            <ul>
              <li className="cardContent">
                <strong>Insurance Renual:</strong>
                {value.insuranceRenual}
              </li>
              <li className="cardContent">
                <strong>Service Date:</strong>
                {value.serviceDate}
              </li>
              <li className="cardContent">
                <strong>Location:</strong>
                {value.location}
              </li>
              <li className="cardContent">
                <strong>annualTax:</strong>
                {value.annualTax}
              </li>
              <li className="cardContent">
                <strong>Chassis Number:</strong>
                {value.chassisNumber}
              </li>
            </ul>
            {/* <a className="fuel-report" role="button" data-bs-toggle="collapse" href={"#collapse" + value.veichelNumber} aria-expanded="false" aria-controls={"collapse" + value.veichelNumber}>Fuel Filling Report - </a> */}
            { value.filledFuel[0] ? (
              <>
              <Link
              className="fuel-report"
              onClick={() => setOpen(!open)}
              aria-controls={"collapse" + value.veichelNumber}
              aria-expanded={open}
            >
              Fuel Filling Report- 
            </Link> 
            </>
            ):('')}
            <Collapse in={open}>
              <table id={"collapse" + value.veichelNumber} style={{ width: "100%" }}>
                {value.filledFuel.map((fuel, index) => (
                  <tbody>
                    <tr>
                      <th>Disel Rate:</th>
                      <td>{fuel.dieselRate}</td>
                    </tr>
                    <tr>
                      <th>Disel Cost:</th>
                      <td>{fuel.dieselCost}</td>
                    </tr>
                    <tr>
                      <th>Quantity:</th>
                      <td>{fuel.liters}</td>
                    </tr>
                    <tr className="fuel-record-divider">
                      <th>Filled on :</th>
                      <td>{fuel.createdAt}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </Collapse>            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ambulance;
