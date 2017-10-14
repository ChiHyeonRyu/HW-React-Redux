import React from 'react';
import PropTypes from 'prop-types';

const ClearButton = ({ onClick }) => (
  <button onClick={ onClick }>C</button>
)

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ClearButton
