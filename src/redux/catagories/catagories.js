const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = ['UNDER CONSTRUCTION'];

export const checkStatus = (id = 1) => ({
  type: CHECK_STATUS,
  payload: id,
});

const checkStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS: return 'UNDER CONSTRUCTION';
    default: return state;
  }
};

export default checkStatusReducer;
