/* eslint-disable no-debugger */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getShipmentsState } from '../../store';
import { saveShipmentToState } from '../../store/shipmentsReducer';
import './CompanyPage.scss';
import { validate, countBays } from '../../helpers';

export const CompanyPage = () => {
  const dispatch = useDispatch();

  const { shipmentId } = useParams();
  const { name, email, boxes } = useSelector(getShipmentsState)
    .filter((shipment) => shipment.id === shipmentId)[0];

  const [cargoBays, setCargoBays] = useState(0);
  const [boxesState, setBoxesState] = useState('');
  const [error, setError] = useState('');

  const onBoxesChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const isValid = validate(value);
    if (isValid) {
      setBoxesState(value);
      setCargoBays(countBays(value));
      setError('');
      dispatch(saveShipmentToState(shipmentId, value));
    } else {
      setError('The string is Invalid!');
      setCargoBays(0);
    }
  };

  useEffect(() => {
    if (!boxes) {
      setBoxesState('');
      setCargoBays(0);
    }

    setBoxesState(boxes);
    setCargoBays(countBays(boxes));
  }, [shipmentId, boxesState]);

  return (
    <div className="company_page">
      <h2 className="company_page__title">{name}</h2>
      <p className="company_page__email">{email}</p>
      <p className="company_page__bays">
        Number of required cargo bays:
        <span>{cargoBays}</span>
      </p>
      <div className="company_page__boxes">
        <label
          className="company_page__boxes__label"
          htmlFor="boxes_input"
        >
          Cargo boxes
        </label>
        <div className="company_page__boxes__container">
          <input
            id="boxes_input"
            className="company_page__boxes__container__input"
            type="text"
            onChange={(event) => onBoxesChange(event)}
            value={boxesState || ''}
          />
        </div>
        <p className="company_page__boxes__error">{error}</p>
      </div>
    </div>
  );
};
