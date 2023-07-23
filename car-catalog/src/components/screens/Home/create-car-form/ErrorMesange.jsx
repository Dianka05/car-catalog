import React from 'react'

const ErrorMesange = ({error}) => {
    if (!error) return null; 

    return (
        <p style={{color: 'red',}}>
            required
        </p>
    )
}

export default ErrorMesange