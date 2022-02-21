import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

function WishList({ wishes, onWishesChange }) {
  return (
    <ul className="wish-list">
      {wishes.map(({ text, done, id }, i) => (
        <WishItem
          text={text}
          done={done}
          id={`wish${id}`}
          key={`wish${id}`}
          onDoneChange={(valorDone) => {
            const updatedWishes = [...wishes];
            updatedWishes[i].done = valorDone;
            onWishesChange(updatedWishes);
          }}
        />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      text: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
  onWishesChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => { },
};

export default WishList;
