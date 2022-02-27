import React from 'react';
import MaterialTable from 'material-table';
import { useState, useEffect } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { GetAmbulanceDropdownAction } from '../../utils/redux/actions/dropdowns';
//import { GETAmbulancesDropdown } from '../../utils/constants/APIConstants';


const LocationDropdowns = (props) => {

  const [data1, setdata] = useState([]);
  const columns = [
    {
      title: "State",
      field: "state",
    },
    {
      title: "Location",
      field: "location",
    },
    {
      title: "Zone",
      field: "zone",
    },

  ];

  // useEffect(() => {
  //   fetch('http://3.140.246.223:5000/api/dropdown/location-dropdown/zone-3').
  //     then(res => res.json()).then(data => { setdata(data.data) })
  // }, [])


  useEffect(() => {
    props.GetAmbulanceDropdownAction();
    //const Finaldata = ;
    //setdata(Finaldata);
  }, [])


  return (

    <div classstate="container mt-top mt-5" >

      <div className='locationDstyle'>
        <MaterialTable
          title="Location Details"
          data={props.AmbulanceDropdownReducer.data.data}
          columns={columns}
          options={{
            search: true, paging: true, filtering: false, exportButton: true, cellStyle: {
              backgroundColor: '#EEE',
              textAlign: 'center'
            },
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF',
              textAlign: 'center'
            },
            pageSize: 10
          }}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { AmbulanceDropdownReducer: state.AmbulanceDropdownReducer };
}

export default connect(mapStateToProps, { GetAmbulanceDropdownAction })(LocationDropdowns);