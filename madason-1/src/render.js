import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage, updateNewMessageText} from './redux/state.js'

// addNewMessage('Hello my dear friends!');

export let reRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addNewMessage={addNewMessage} updateNewMessageText={updateNewMessageText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
