import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AccordianDevice from './AccordianDevice';

const AccordianBlockDevice = ({
    blockTitle,
    accordianHeader,
    children,
}) => {

    const [isActive, setIsActive] = useState('');

    const accordionToggle = activeElement => {
        if(activeElement === isActive) setIsActive('');
        else setIsActive(activeElement)
    };
  return (
    <>
    
     <AccordianDevice
        content={children}
        title={accordianHeader}
        accordionToggle={accordionToggle}
        isActive={isActive}
        blockTitle={blockTitle}
      />
    </>
  ) 
 
};

AccordianBlockDevice.propTypes = {
    blockTitle:PropTypes.string,
    accordianHeader:PropTypes.string,
    children:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.func
    ])
}
export default AccordianBlockDevice;
