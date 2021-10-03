import React, { useState, useEffect } from 'react';
import './Css/App.css';
import './Css/Login.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
        {/* <Route path="/fullpost" component={Fullpost} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
