import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const bookState = useSelector((state) => state.books);
  const booksToBeDisplayed = bookState.books;
  return (
    <div className="books_container">
      {(bookState.loading === false) ? booksToBeDisplayed[0].map((books) => (
        <div key={books.id}>
          <Book author={books.author} title={books.title} id={books.id} />
        </div>
      )) : <h1>****LOADING***</h1>}
      <AddBook />
    </div>
  );
};

export default Books;
