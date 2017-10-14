import React from 'react';
import PropTypes from 'prop-types';

const PlusButton = ({ onClick }) => (
  <button onClick={ onClick }>+=</button>
)

PlusButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlusButton
