import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Image from '../images/progressCircle.png';

const buttonStyle = {
  backgroundColor: '#fff',
  color: '#0290ff',
  border: 'none',
  cursor: 'pointer',
  width: 'auto',
};

const updateButtonStyle = {
  width: '15rem',
  height: '1rem',
  fontSize: '1rem',
  marginTop: '2rem',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  border: '2px solid #e8e8e8',
  backgroundColor: '#fff',
  padding: '2rem',
  textTransform: 'none',
};

const buttonContainerStyle = {
  display: 'flex',
};

const authorStyle = {
  fontSize: '1.3rem',
  color: '#4386bf',
  margin: '1rem',
};

const titleStyle = {
  fontSize: '2rem',
  margin: '1rem',
};

const categoryStyle = {
  fontSize: '1.3rem',
  color: '#888888',
  margin: '1rem',
};

const progressDescriptionStyle = {
  color: '#888888',
  fontSize: '1.3rem',
  fontStyle: 'normal',
  margin: '1rem',
};

const imageStyle = {
  width: '10rem',
  height: '10rem',
};

const progressFontStyle = {
  fontSize: '3rem',
  margin: '1rem',
};

const completedFontStyle = {
  fontSize: '1.5rem',
  margin: '0',
};

const generateRandomPercentile = () => {
  const percent = '%';
  return (Math.floor(Math.random() * 100) + 1) + percent;
};

const Book = (props) => {
  const {
    title,
    author,
    id,
    category,
  } = props;
  const dispatch = useDispatch();
  const remove = (bookToBeRemoved) => {
    dispatch(removeBook(bookToBeRemoved));
  };

  return (
    <div className="book" style={containerStyle}>
      <div>
        <h1 className="book_category" style={categoryStyle}>{category}</h1>
        <h1 className="book_title" style={titleStyle}>{title}</h1>
        <h1 className="book_author" style={authorStyle}>{author}</h1>
        <div style={buttonContainerStyle}>
          <button type="button" style={buttonStyle}>Comments</button>
          <button className="remove_button" style={buttonStyle} type="button" id={id} onClick={(e) => remove(e.target.id)}>Remove</button>
          <button type="button" style={buttonStyle}>Edit</button>
        </div>
      </div>
      <div className="progressCircle">
        <img alt="progress_image" src={`${Image}`} style={imageStyle} />
        <div>
          <p style={progressFontStyle}>{generateRandomPercentile()}</p>
          <p style={completedFontStyle}>Completed</p>
        </div>
      </div>
      <div>
        <p style={progressDescriptionStyle}>CURRENT CHAPTER</p>
        <p style={progressDescriptionStyle}>Chapter 17</p>
        <button type="button" style={updateButtonStyle}>UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
