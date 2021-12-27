import React from 'react'
import {Modal, Button, Row, Col} from 'react-bootstrap';

const UserDetails = ({onHide, show, record}) => (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='title' id="contained-modal-title-vcenter">
            {record.firstname}{" "}{record.lastname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Row>
             <Col md={12}>
             <ul>
            <li ><strong>Phone Number - </strong>{record.phonenumber}</li>
            <li><strong>Email - </strong>{record.email}</li>
            <li><strong>Adhaar card - </strong>{record.adhaarCardNumber}</li>
            <li><strong>Bank Account Number - </strong>{record.bankaccountnumber}</li>
            <li><strong>Current Address - </strong>{record.currentAddress}</li>
            <li><strong>Driving Lisence - </strong>{record.driversLisencesNumber}</li>
            <li><strong>Pan Card - </strong>{record.panCardNumber}</li>           

        </ul> 
             </Col>
             {/* <Col md={6}>
                 <div className="driver-photo">
                <img src={'https://images.pexels.com/photos/6257814/pexels-photo-6257814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt="driver photo"/>
                </div>
             </Col> */}
         </Row>
         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
)

export default UserDetails
