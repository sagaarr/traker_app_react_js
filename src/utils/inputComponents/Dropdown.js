import React from 'react'
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import Combobox from "react-widgets/Combobox";

const Dropdown = ({input, meta, ...rest}) => {
  return (
    <>
         <Combobox 
         {...input} 
         data={rest.dropdownData} 
         textField={rest.textFiled ? rest.textFiled : ""} 
         placeholder={rest.placeholder}
         />
        </>
  )
}

export default Dropdown