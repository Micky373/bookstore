import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const AddBook = () => {
  const [form, setForm] = useState({
    item_id: '',
    title: '',
    author: '',
    category: 'Check',
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
      item_id: uuidv4(),
      author: form.author,
      title: form.title,
      category: 'Check',
    };
    dispatch(postBook(theBook));
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
