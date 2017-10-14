import React from 'react';
import PropTypes from 'prop-types';

const MinusButton = ({ onClick }) => (
  <button onClick={ onClick }>-=</button>
)

MinusButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MinusButton
