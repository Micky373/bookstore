import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/catagories/catagories';

const buttonStyle = {
  width: '20rem',
  textTransform: 'uppercase',
  cursor: 'pointer',
};

const Catagories = () => {
  const dispatch = useDispatch();
  const isAvailable = useSelector((state) => state.status);
  const [display, SetDisplay] = useState(false);
  const showStatus = () => {
    dispatch(checkStatus());
    SetDisplay(true);
    setTimeout(() => SetDisplay(false), 2000);
  };
  return (
    <div className="catagories">
      <button className="status_button" type="button" style={buttonStyle} onClick={showStatus}>Check Status</button>
      <h1>{display ? isAvailable : ''}</h1>
    </div>
  );
};

export default Catagories;
