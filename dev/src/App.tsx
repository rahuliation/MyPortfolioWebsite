import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Resume } from './Pages/Resume';
import { Blog } from './Pages/Blog';
import { Portfolio } from './Pages/Portfolio';

import { initializeIcons } from '@uifabric/icons';

initializeIcons();

const App = () => (
    <Router>
      <>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/Resume" component={Resume} />
        <Route exact={true} path="/Blog" component={Blog} />
        <Route exact={true} path="/Portfolio" component={Portfolio} />
      </>
    </Router>
  );

export default App;
