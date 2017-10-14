import React from 'react';
import PropTypes from 'prop-types';

const AllclearButton = ({ onClick }) => (
  <button onClick={ onClick }>AC</button>
)

AllclearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AllclearButton
