import React from 'react'

const Loader = () => {
    return (
        <div  style={{position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)', textAlign: 'center'}}>
             <span className="loader"></span>
        </div>
        

    )
}

export default Loader
