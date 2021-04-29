import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let reRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} addNewMessage={store.addNewMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

reRender(store.getState());

store.subscribe(reRender)

reportWebVitals();
