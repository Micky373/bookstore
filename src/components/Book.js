import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book">
      <h1 className="book_title">{title}</h1>
      <h1 className="book_author">{author}</h1>
    </div>
  );
};

Book.propTypes = { title: PropTypes.string.isRequired, author: PropTypes.string.isRequired };
export default Book;
