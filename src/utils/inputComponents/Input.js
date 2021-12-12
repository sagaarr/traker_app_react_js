import React from 'react'

const Input = ({input, meta, ...rest}) => {
    return (
        <>
        <input {...input} {...rest}/>   
        {meta.touched && meta.error ? <span className="error">*{meta.error}</span>:""}
        </>
    )
}

export default Input
