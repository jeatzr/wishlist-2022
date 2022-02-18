import React, { useState } from 'react';
import PropTypes from 'prop-types';

function WishInput({ onNewWish }) {
  const [newWish, setNewWish] = useState('');
  return (
    <fieldset className="wish-input">
      <legend>New Wish...</legend>
      <input
        type="text"
        onChange={(e) => setNewWish(e.target.value)}
        value={newWish}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newWish.length) {
            onNewWish({ done: false, text: newWish });
            setNewWish('');
          }
        }}
        placeholder="Input new wish"
        className="wish-input__field"
      />
    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
  onNewWish: () => { },
};

export default WishInput;
