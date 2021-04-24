import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addNewMessage, updateNewMessageText} from './redux/state.js'

let reRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addNewMessage={addNewMessage} updateNewMessageText={updateNewMessageText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

reRender(state);

subscribe(reRender)

reportWebVitals();
