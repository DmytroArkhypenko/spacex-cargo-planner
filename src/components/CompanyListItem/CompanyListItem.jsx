import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CompanyListItem.scss';

export const CompanyListItem = ({ id, name }) => (
  <div className="company__item">
    <Link
      className="company__item__link"
      to={`/shipmentId=${id}`}
    >
      {name}
    </Link>
  </div>
);

CompanyListItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  name: PropTypes.string.isRequired,
};
