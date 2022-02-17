import React from 'react';

function WishInput() {
  return (
    <fieldset className="wish-input">
      <legend>New Wish...</legend>
      <input type="text" placeholder="Input new wish" className="wish-input__field" />
    </fieldset>
  );
}

export default WishInput;
