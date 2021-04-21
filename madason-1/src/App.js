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

const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/Profile' component={Profile}/>
          <Route path='/Dialogs' component={Dialogs}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
