import React from 'react';
import PropTypes from 'prop-types';

function WishItem({ done, text, id, onDoneChange }) {
  return (
    <li
      className={`wish-list__item 
            ${done ? 'wish-list__item--done' : ''}`}
      key={text}
    >
      <input
        type="checkbox"
        id={id}
        checked={done}
        onChange={(e) => onDoneChange(e.target.checked)}
      />
      <label htmlFor={id}>{text}</label>
    </li>
  );
}

WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
};

WishItem.defaultProps = {
  done: false,
  text: '',
  id: '',
};

export default WishItem;
