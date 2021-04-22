import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {id:1, post:"Hello my dear friend!"},
  {id:2, post:"Hello my dear friends!"},
  {id:3, post:"Hello my dear friend!"},
  {id:4, post:"Hello my dear friends!"},
  {id:5, post:"Hello my dear teacher!"}
]

const dialogs = [
  {id:1, name: "Ivan"},
  {id:2, name: "Maga"},
  {id:3, name: "Sasha"},
  {id:4, name: "Masha"},
  {id:5, name: "Dasha"}
]

const messages = [
  {id:1, message:"Hello!"},
  {id:2, message:"How are you?"},
  {id:3, message:"How old are you?"},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
