import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getShipments } from '../../store';
import './CompaniesList.scss';
import { CompanyListItem } from '../CompanyListItem';

export const CompaniesList = () => {
  const shipments = useSelector(getShipments);

  if (!shipments.length) {
    return (
      <div className="message">
        <h2 className="message__title">Ups ...</h2>
        <p className="message__body">Press load button to get shipments!</p>
      </div>
    );
  }

  return (
    <div className="companies_list">
      {shipments.map((shipment) => (
        <CompanyListItem
          key={uuidv4()}
          id={shipment.id}
          name={shipment.name}
        />
      ))}
    </div>
  );
};
