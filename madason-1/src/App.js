import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import License from './components/Dialogs/Dialogs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/Profile' render={ () => <Profile posts={props.posts}/>}/>
          <Route path='/Dialogs' render={ () => <Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
