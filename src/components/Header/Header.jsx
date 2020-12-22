import React from 'react';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button';
import { Search } from '../Search';
import { getShipments } from '../../api';
import { setShipments } from '../../store/shipmentsReducer';
import { saveShipmentsStateToStorage } from '../../localStorage';
import { getShipmentsState } from '../../store';

export const Header = () => {
  const dispatch = useDispatch();
  const shipmentsFromState = useSelector(getShipmentsState);

  const loadShipments = () => {
    getShipments()
      .then((allShipments) => dispatch(setShipments(allShipments)));
  };

  const saveStateToStorage = () => {
    saveShipmentsStateToStorage(shipmentsFromState);
  };

  return (
    <div className="header">
      <h1 className="header__title">Cargo Planner</h1>
      <Search />
      <div className="actions">
        <Button
          title="Load"
          func={loadShipments}
        />
        <Button
          title="Save"
          func={saveStateToStorage}
        />
      </div>
    </div>
  );
};
