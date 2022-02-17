import React, { useState } from 'react';
import './App.css';
import WishInput from './WishInput';

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
      <ul className="wish-list">
        {wishes.map(({ text, done }, i) => (
          <li
            className={`wish-list__item 
            ${done ? 'wish-list__item--done' : ''}`}
            key={text}
          >
            <input type="checkbox" id={`wish${i}`} checked={done} />
            <label htmlFor={`wish${i}`}>{text}</label>
          </li>
        ))}
      </ul>

      <button type="button" className="wish-clear">Eliminar deseos cumplidos</button>

    </div>

  );
}

export default App;
