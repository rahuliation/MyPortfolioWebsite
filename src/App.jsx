import React, { Component } from 'react';
import logo from './logo.png';
import Home from './pages/Home';
import Resume from './pages/Resume';

import 'tachyons/css/tachyons.css';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />    
    </div>
  </Router>
);



const Header = () => (
  <nav className="dt w-100 border-box ph3 pv1 ph5-ns bg-gold">
  <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
    <img src={logo} className="dib w4" alt="Site Name"/>
  </a>
  <div className="dtc b v-mid w-75 tr">
     <Link to="/"  className=" navy link dim dark-gray f6 f5-ns dib mr3 mr4-ns" >Home</Link>
     <Link to="/resume"  className="navy link dim dark-gray f6 f5-ns dib mr3 mr4-ns" >About</Link>
     <Link to="/topics" className=" navy link dim dark-gray f6 f5-ns dib" >topics</Link>
  </div>
</nav>
);


export default App;
