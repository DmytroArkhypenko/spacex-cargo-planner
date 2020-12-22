import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { shipmentsReducer } from './shipmentsReducer';
import { searchReducer } from './searchReducer';

const rootReducer = combineReducers({
  query: searchReducer,
  shipments: shipmentsReducer,
});

export const getShipments = (state) => {
  if (state.query === '') {
    return state.shipments;
  }
  return [...state.shipments]
    .filter((shipment) => shipment.name !== null && shipment.name.toLowerCase()
      .includes(state.query.toLowerCase()));
};

export const getCurrentShipment = (state) => [...state.shipments]
  .filter((shipment) => shipment.id === state.shipemntId);

export const getShipmentsState = (state) => state.shipments;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
