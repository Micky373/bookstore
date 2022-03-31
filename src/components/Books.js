import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const BookToBeDesplayed = {
  title: 'Book1',
  author: 'Author1',
};

const Books = () => {
  const { title, author } = BookToBeDesplayed;
  return (
    <div className="books_container">
      <Book title={title} author={author} />
      <AddBook />
    </div>
  );
};

export default Books;
