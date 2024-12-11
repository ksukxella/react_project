import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile_content from './components/Profile_content/Profile_content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Users from './components/Users/Users'
import UsersContainer from './components/Users/UsersContainer';

 
const App = (props) => {

  return (
    // <Routes>
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div class="app-wrapper-content"> 
      <Routes>
        <Route exact path ="/dialogs" element={<DialogsContainer />}/>
        {/* <Route exact path ="/profile_content" render={ () => <Profile_content />}/> */}
        <Route exact path ="/profile_content" element={<Profile_content />}/>
        <Route exact path ="/users" element={<UsersContainer/>}/>
      </Routes>
      </div>
      </div>
      // </Routes>
      );
  }



  export default App;