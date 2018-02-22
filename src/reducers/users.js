const initialState = [];

export function users(state = initialState, action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS_LIST':
      return action.items;

    default:
      return state;
  }
}

export function user(state = initialState, action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS_USER':
      return action.items;

    default:
      return state;
  }
}