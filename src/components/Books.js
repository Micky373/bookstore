import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const bookState = useSelector((state) => state.books);

  return (
    <div className="books_container">
      {bookState.map((books) => (
        <div key={books.id}>
          <Book author={books.author} title={books.title} id={books.id} />
        </div>
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
