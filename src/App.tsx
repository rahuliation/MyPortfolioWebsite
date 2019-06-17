import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './assets/css/iconmonstr-iconic-font.css';
import 'office-ui-fabric-react/dist/css/fabric.min.css';
import { Home } from './Pages/Home';
import { Resume } from './Pages/Resume';
import { CV } from './Pages/CV';
import { Blog } from './Pages/Blog';
import { Portfolio } from './Pages/Portfolio';
import { Contact } from './Pages/Contact';

import { initializeIcons } from '@uifabric/icons';

initializeIcons();

const App = () => (
    <Router>
      <>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/cv" component={CV} />
        <Route exact={true} path="/resume" component={Resume} />
        <Route exact={true} path="/blog" component={Blog} />
        <Route exact={true} path="/portfolio" component={Portfolio} />
        <Route exact={true} path="/contact" component={Contact} />
      </>
    </Router>
  );

export default App;
