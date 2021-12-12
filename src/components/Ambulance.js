import React from "react";
import "./Style.css";

const Ambulance = ({ value }) => {
  return (
    <>
      <div className="card" style={{ width: "42rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            Ambulance Number - {value.veichelNumber}
            &nbsp;
          </h5>
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
            <div className="fuel-report">Fuel Filling Report - </div>
            <table style={{ width: "100%" }}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Ambulance;
