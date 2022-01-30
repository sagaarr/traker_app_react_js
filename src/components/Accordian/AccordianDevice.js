import React from 'react';
import PropTypes from 'prop-types';

const AccordianDevice = ({
    content,
    title,
    accordionToggle,
    isActive,
    blockTitle
}) => {
  return <div>
    <div className="accordian-header" onClick={() => accordionToggle(blockTitle)}>
        <div className="heading-left" style={{backgroundColor:"red"}}>
            {title}
        </div>
        <div className="collapse-icon heading-right">
            <span className="icon-up-arrow"></span>
        </div>
    </div>
    {
        isActive === blockTitle && (
            <div className="accordian-content">{content}</div>
        )
    }
  </div>;
};


AccordianDevice.propTypes = {
    title:PropTypes.string,
    accordionToggle:PropTypes.func,
    isActive:PropTypes.string,
    blockTitle:PropTypes.string,
    content:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.func
    ])
};


export default AccordianDevice;
