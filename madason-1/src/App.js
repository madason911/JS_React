import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
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
          <Route path='/Profile' render={ () => <Profile posts={props.state.profilePage.posts}/>}/>
          <Route path='/Dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage} 
                                                          addNewMessage={props.addNewMessage}
                                                          updateNewMessageText={props.updateNewMessageText}/>}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
