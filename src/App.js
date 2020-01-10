import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route}  from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';



const App = (props) => {
  return (
       <div className='app-wrapper'>
          <Header/>
          <NavbarContainer/>
          <div className='app-wrapper-content'>
              <Route exact path='/profile' render={ () => <Profile/>}/>
              <Route path='/dialogs' render={ () => <DialogsContainer/>}/>
              <Route exact path='/news' render={ () => <News/>}/>
              <Route exact path='/music' render={ () => <Music/>}/>
              <Route exact path='/settings' render={ () => <Settings/>}/>
              <Route exact path='/users' render={ () =><UsersContainer/>}/>
          </div>
       </div>
  );
}

export default App;
