import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import bookStore from '../redux/configureStore';

const AddBook = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
  });

  const titleChange = (e) => {
    setForm({
      ...form,
      title: e.target.value,
    });
  };

  const authorChange = (e) => {
    setForm({
      ...form,
      author: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitBook = (e) => {
    e.preventDefault();
    const theBook = {
      id: bookStore.getState().books.length,
      author: form.author,
      title: form.title,
    };
    dispatch(addBook(theBook));
    form.author = '';
    form.title = '';
  };

  return (
    <div className="add_book">
      <form onSubmit={(e) => submitBook(e)}>
        <input className="author" placeholder="Author name" value={form.author} onChange={(e) => authorChange(e)} required />
        <input className="title" placeholder="Book title" value={form.title} onChange={(e) => titleChange(e)} required />
        <button className="add_button" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
