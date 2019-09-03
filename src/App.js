import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './assets/logo.svg';
import './App.css';
import Store from './pages/Store/Store';
import AdminPage from './pages/AdminPage/AdminPage'

function App() {
  return (
    <>
       <Router>
        <Route path="/" exact component={Store} />
        <Route path="/admin" exact component={AdminPage} />
      </Router>
    </>
  );
}

export default App;
