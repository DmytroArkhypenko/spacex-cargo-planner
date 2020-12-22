import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ title, func }) => (
  <button
    className="styled_button"
    type="button"
    onClick={func}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
