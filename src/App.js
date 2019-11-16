import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route}  from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
       <div className='app-wrapper'>
          <Header/>
          <Navbar store = {props.store}/>
          <div className='app-wrapper-content'>
              <Route exact path='/profile' render={ () => <Profile store ={props.store}/>}/>
              <Route path='/dialogs' render={ () => <DialogsContainer store = {props.store} />}/>
              <Route exact path='/news' render={ () => <News/>}/>
              <Route exact path='/music' render={ () => <Music/>}/>
              <Route exact path='/settings' render={ () => <Settings/>}/>
          </div>
       </div>
   
  );
}


export default App;
