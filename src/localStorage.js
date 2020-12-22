export const getShipmentsStateFromStorage = () => {
  try {
    const shipmentsFromStorage = window.localStorage.getItem('shipments');
    if (shipmentsFromStorage === null) {
      return [];
    }

    return JSON.parse(shipmentsFromStorage);
  } catch (e) {
    return undefined;
  }
};

export const saveShipmentsStateToStorage = (shipments) => window.localStorage.setItem('shipments', JSON.stringify(shipments));
