import React from 'react';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route}  from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
  return (
       <div className='app-wrapper'>
          <HeaderContainer/>
          <NavbarContainer/>
          <div className='app-wrapper-content'>
              <Route path='/profile/:userId?' render={ () => <ProfileContainer/>}/>
              <Route path='/dialogs' render={ () => <DialogsContainer/>}/>
              <Route path='/news' render={ () => <News/>}/>
              <Route path='/music' render={ () => <Music/>}/>
              <Route path='/settings' render={ () => <Settings/>}/>
              <Route path='/users' render={ () =><UsersContainer/>}/>
          </div>
       </div>
  );
}

export default App;
