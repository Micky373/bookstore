const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      {
        id: 1,
        title: action.payload.title,
        author: action.payload.author,
      },
    ];
    case REMOVE_BOOK: return state.filter((book) => (book.id !== action.payload.id));
    default: return state;
  }
};

export default bookReducer;
