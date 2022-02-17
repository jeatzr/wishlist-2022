import React, { useState } from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
  { text: 'Subir en globo', done: true },
  { text: 'Dar la vuelta al mundo', done: false },
];

function App() {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>Mi Wishlist</h1>
      <WishInput />
      <WishList wishes={wishes} />

      <button type="button" className="wish-clear">Eliminar deseos cumplidos</button>

    </div>

  );
}

export default App;
