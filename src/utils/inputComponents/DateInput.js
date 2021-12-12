import React from 'react'
import DatePicker from "react-date-picker";

const DateInput = ({input, meta, ...rest}) => {
    return (
        <>
       <DatePicker {...input} {...rest} format="y-MM-dd"/>
        {meta.touched && meta.error ? <span className="error">*{meta.error}</span>:""}
        </>
    )
}

export default DateInput
