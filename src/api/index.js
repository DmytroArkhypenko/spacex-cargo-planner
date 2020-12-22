const BASE_URL = 'https://bitbucket.org/artur_cation/spacex-cargo-planner/raw/1a9e1c0ff090a114999c47b7e9388fbc88bd083b/shipments.json';

export const getShipments = () => fetch(`${BASE_URL}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  });
