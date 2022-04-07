import axios from 'axios';

const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
const POST_BOOK = 'POST_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

const fetchBooksSuccess = (listOfBooks) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: listOfBooks,
});

const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

const postBookSuccess = () => ({
  type: POST_BOOK,
});

const removeBookSuccess = () => ({
  type: REMOVE_BOOK,
});

export const getBooks = () => async (dispatch) => {
  dispatch(fetchBooksRequest());
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/W1sKmwT25SlhRhlfLR9M/books');
    const bookLists = response.data;
    const books = Object.entries(bookLists).map(([key, value]) => ({
      id: key,
      title: value[0].title,
      author: value[0].author,
      genre: value[0].category,
    }));
    dispatch(fetchBooksSuccess(books));
  } catch (error) {
    dispatch(fetchBooksFailure(error.message));
  }
};

export const postBook = (book) => async (dispatch) => {
  dispatch(fetchBooksRequest());
  try {
    await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/W1sKmwT25SlhRhlfLR9M/books', book);
    dispatch(postBookSuccess());
    dispatch(getBooks());
  } catch (error) {
    dispatch(fetchBooksFailure(error.message));
  }
};

export const removeBook = (id) => async (dispatch) => {
  dispatch(fetchBooksRequest());
  try {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/W1sKmwT25SlhRhlfLR9M/books/${id}`);
    console.log(id);
    dispatch(removeBookSuccess());
    dispatch(getBooks());
  } catch (error) {
    dispatch(fetchBooksFailure(error.message));
  }
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_BOOKS_SUCCESS: return {
      ...state,
      loading: false,
      books: [action.payload],
      error: '',
    };

    case FETCH_BOOKS_FAILURE: return {
      ...state,
      books: [],
      error: action.payload,
    };

    case REMOVE_BOOK: return {
      ...state,
      loading: false,
      error: '',
    };

    case POST_BOOK: return {
      ...state,
      loading: false,
      error: '',
    };

    default: return state;
  }
};

export default bookReducer;
