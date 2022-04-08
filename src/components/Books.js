import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const loadingDisplayStyle = {
  textAlign: 'center',
};

const Books = () => {
  const bookState = useSelector((state) => state.books);
  const booksToBeDisplayed = bookState.books;
  return (
    <div>
      <div className="books_container">
        {(bookState.loading === false) ? booksToBeDisplayed[0].map((books) => (
          <div key={books.id}>
            <Book author={books.author} title={books.title} id={books.id} category={books.genre} />
          </div>
        )) : <h1 style={loadingDisplayStyle}>****LOADING***</h1>}
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
