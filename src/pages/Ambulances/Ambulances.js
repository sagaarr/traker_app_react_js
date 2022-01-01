import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader';
import { getAmbulanceAction } from '../../utils/redux/actions/ambulance/ambulanceAction';
import Ambulance from "../../components/Ambulance";
import { Form, InputGroup } from "react-bootstrap";

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
            <div className="row">
              <div className="col-md-12 mt-5">
                <h2>Ambulances</h2>
              </div>
              <Form>
                <div className="row mb-3 flex-row-reverse">
                  <Form.Group className="col-md-4" controlId="validationFormSearch">
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-search"></i></InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Search Ambulance"
                        aria-describedby="inputGroupPrepend"
                        name="ambulance"
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
              </Form>
            </div>
            <div className="row">
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
