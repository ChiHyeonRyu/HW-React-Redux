import React from 'react';
import PropTypes from 'prop-types';

const NumButton = ({n, onClick}) => (
  <button onClick={onClick}>{n}</button>
)

NumButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NumButton
