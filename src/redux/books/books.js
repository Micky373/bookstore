const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
  },
  {
    id: 3,
    title: 'Book 3',
    author: 'Author 3',
  },
];

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
        id: state.length + 1,
        title: action.payload.title,
        author: action.payload.author,
      },
    ];
    case REMOVE_BOOK: {
      const newState = [...state];
      newState.splice(action.payload - 1, 1);
      for (let i = 0; i < newState.length; i += 1) {
        newState[i].id = i + 1;
      }
      return newState;
    }
    default: return state;
  }
};

export default bookReducer;
