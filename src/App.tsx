import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/css/iconmonstr-iconic-font.css';
import './assets/css/gotham/style.css';
import './App.css';

import 'office-ui-fabric-react/dist/css/fabric.min.css';
import { Home } from './Pages/Home';
import { Resume } from './Pages/Resume';
import { CV } from './Pages/CV';
import { Blog } from './Pages/Blog';
import { Portfolio } from './Pages/Portfolio';
import { Contact } from './Pages/Contact';
import { NotFound } from './Pages/NotFound';


import { initializeIcons } from '@uifabric/icons';

initializeIcons();

const App = () => (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/cv" component={CV} />
        <Route exact={true} path="/resume" component={Resume} />
        <Route exact={true} path="/blog" component={Blog} />
        <Route exact={true} path="/portfolio" component={Portfolio} />
        <Route exact={true} path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );

export default App;
