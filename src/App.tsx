import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/css/gotham/style.css';
import './assets/css/animate.css';
import { MyLayout } from 'src/Layouts/MyLayout';
import './App.css';
import './assets/css/unicons.css';
import './assets/css/devicon.css';
import './assets/css/devicon-colors.css';
import { Home } from './Pages/Home';
import { Resume } from './Pages/Resume';
import { CV } from './Pages/CV';
import { Blog } from './Pages/Blog';
import { Portfolio } from './Pages/Portfolio';
import { Contact } from './Pages/Contact';
import { NotFound } from './Pages/NotFound';

const layoutHOC = (Component: any): any => () => (
  <MyLayout >
    <Component />
  </MyLayout >
);

const App = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={layoutHOC(Home)} />
      <Route exact={true} path="/resume" component={layoutHOC(Resume)} />
      <Route exact={true} path="/blog" component={layoutHOC(Blog)} />
      <Route exact={true} path="/portfolio" component={layoutHOC(Portfolio)} />
      <Route exact={true} path="/contact" component={layoutHOC(Contact)} />
      <Route path="*" component={layoutHOC(NotFound)} />
      <Route exact={true} path="/cv" component={CV} />
    </Switch>
  </Router>
);

export default App;
