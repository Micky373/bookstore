const CHECK_STATUS = 'CHECK_STATUS'
const initialState = []

export const checkStatus = (id) => {
  return {
    type: CHECK_STATUS,
    payload: id
  }
}

const checkStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS: return 'UNDER CONSTRUCTION'
    default: return state
  }
}

export default checkStatusReducer