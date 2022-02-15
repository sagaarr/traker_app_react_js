import React from 'react'
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";

const Dropdown = ({input, meta, ...rest}) => {
  return (
    <>
         <DropdownList {...input} data={rest.dropdownData} textField={rest.textFiled ? rest.textFiled : ""} placeholder={rest.placeholder}/>
        </>
  )
}

export default Dropdown