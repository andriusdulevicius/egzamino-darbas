import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddNewUser from './components/AddNewUser';
import AllUsers from './components/AllUsers';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='main-body container'>
          <Switch>
            <Route path='/createNewUser' component={AddNewUser}></Route>
            <Route exact path='/' component={AllUsers}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
