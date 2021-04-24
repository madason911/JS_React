import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state.js'
import { addNewMessage } from './redux/state.js'
import {reRender} from './render'

// addNewMessage('Hello my dear friends!');

reRender(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
