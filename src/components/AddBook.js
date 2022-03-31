import React from 'react';

const AddBook = () => (
  <div className="add_book">
    <input className="author" placeholder="Author name" />
    <input className="title" placeholder="Book title" />
    <button className="add_button" type="button">ADD BOOK</button>
  </div>
);

export default AddBook;
