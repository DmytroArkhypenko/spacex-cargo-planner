/* eslint-disable no-debugger */
import { getShipmentsStateFromStorage } from '../localStorage';

const SET_SHIPMENTS = 'SET_SHIPMENTS';
const SAVE_SHIPMENT = 'SET_SHIPMENT';

export const setShipments = (shipments) => ({ type: SET_SHIPMENTS, shipments });
export const saveShipmentToState = (id, boxesStr) => ({
  type: SAVE_SHIPMENT,
  payload: { id, boxesStr },
});

let shipmentsFromStore = getShipmentsStateFromStorage();

if (shipmentsFromStore === undefined) {
  shipmentsFromStore = [];
}

export const shipmentsReducer = (shipments = shipmentsFromStore, action) => {
  switch (action.type) {
    case SET_SHIPMENTS:
      return [...action.shipments];
    case SAVE_SHIPMENT:
      return [...shipments].map((current) => {
        if (current.id === action.payload.id) {
          return {
            ...current,
            boxes: action.payload.boxesStr,
          };
        }
        return current;
      });
    default:
      return shipments;
  }
};
