import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Resume } from './Pages/Resume';

const App = () => (
    <Router>
      <>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/Resume" component={Resume} />
      </>
    </Router>
  );

export default App;
