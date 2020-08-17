import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route,Switch, BrowserRouter} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import TablePage from './pages/TablePage'
function App() {
  return (
   <Router>
     <Switch>
       <Route path='/' exact >
       <LoginPage />
       </Route>
       <Route path='/pastes' exact >
       <TablePage />
       </Route>
       

       </Switch>
   </Router>
  );
}

export default App;
