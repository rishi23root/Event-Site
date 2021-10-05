import React from 'react';
import {
  Route,
  Switch,
  useLocation
} from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { AnimatePresence } from "framer-motion"

import './Css/App.css';

const App = () => {
  const location = useLocation()
  return (
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          {/* <Route path="/fullpost" component={Fullpost} /> */}
        </Switch>
      </AnimatePresence>
  )
}

export default App;
