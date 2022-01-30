import React from 'react';
import PropTypes from 'prop-types';

const AccordianDevice = ({
    content,
    title,
    accordionToggle,
    isActive,
    blockTitle
}) => {
  return <div className='accordian mb-4'>
    <div className={ isActive == blockTitle ? "accordian-header collapsed" : "accordian-header" } onClick={() => accordionToggle(blockTitle)}>
        <div className="header" key={blockTitle}>
            {blockTitle}
        </div>
        <div className="collapse-icon heading-right">
            {title} <span className={ isActive == blockTitle ? "fa fa-chevron-down" : "fa fa-chevron-right" }></span>
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
