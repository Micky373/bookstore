import { combineReducers, createStore } from "redux";
import checkStatusReducer from "./catagories/catagories";
import bookReducer from "./books/books";

const rootReducer = combineReducers({
  books: bookReducer,
  status: checkStatusReducer
})

const bookStore = createStore(rootReducer)

export default bookStore
