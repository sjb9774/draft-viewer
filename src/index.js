import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Scryfall from './scryfall/api.js';

ReactDOM.render(<App />, document.getElementById('root'));

let scryfall = new Scryfall();
let p = {name: "Inferno Titan", setCode: "M12"};
scryfall.getCard(p)
        .then((result) => result.json())
        .then((json) => console.log(json.oracle_text));
