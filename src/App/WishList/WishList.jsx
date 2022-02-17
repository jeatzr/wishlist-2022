import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

function WishList({ wishes }) {
  return (
    <ul className="wish-list">
      {wishes.map(({ text, done }, i) => (
        <WishItem text={text} done={done} id={`wish${i}`} />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      text: PropTypes.string,
    }),
  ),
};

WishList.defaultProps = {
  wishes: [],
};

export default WishList;
