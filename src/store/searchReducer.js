const SEARCH_INPUT = 'SEARCH_INPUT';

export const searchByName = (query) => ({ type: SEARCH_INPUT, query });

export const searchReducer = (query = '', action) => {
  switch (action.type) {
    case SEARCH_INPUT:
      return action.query;

    default:
      return query;
  }
};
