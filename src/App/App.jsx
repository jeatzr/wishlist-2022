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
      <WishInput onNewWish={(wish) => setWishes([wish, ...wishes])} />
      <WishList wishes={wishes} onWishesChange={setWishes} />

      <button
        type="button"
        className="wish-clear"
        onClick={() => setWishes(wishes.filter((wish) => !wish.done))}
      >
        Eliminar deseos cumplidos
      </button>

    </div>

  );
}

export default App;
