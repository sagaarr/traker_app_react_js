import React from 'react';
import PropTypes from 'prop-types';

const LocationsAccordian = ({
  blockTitle,
  accordianHeader,
  children,
}) => {
  return <div>
    
  </div>;
};

LocationsAccordian.propTypes = {
  blockTitle:PropTypes.string,
  accordianHeader:PropTypes.string,
  children:PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.func
  ])
}
export default LocationsAccordian;
