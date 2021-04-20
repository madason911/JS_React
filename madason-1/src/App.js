import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import License from './components/License/License';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/License' component={License}/>
      </div>
    </Router>
  );
}

export default App;
