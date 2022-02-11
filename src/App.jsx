import React from 'react';
import './App.css';

const wishes = [
  { text: 'Subir en globo', done: true },
  { text: 'Dar la vuelta al mundo', done: false },
];

function App() {
  return (
    <div className="app">
      <h1>Mi Wishlist</h1>
      <fieldset className="wish-input">
        <legend>New Wish...</legend>
        <input type="text" placeholder="Input new wish" className="wish-input__field" />
      </fieldset>
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
