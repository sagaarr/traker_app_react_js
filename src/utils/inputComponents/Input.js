import React from 'react'

const Input = ({input, meta, ...rest}) => {
    return (
        <>
        <input {...input} {...rest}/>   
        </>
    )
}

export default Input
