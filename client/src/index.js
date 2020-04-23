import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Player from './models/Player'
import io from 'socket.io-client';

io('localhost:8082')


const player = Player.create({
  name: "Harry",
  starting_cards: 4,
})

ReactDOM.render(
  <React.StrictMode>
    <App player={player} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
