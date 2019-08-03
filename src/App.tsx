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
import { messaging } from './fb';

const layoutHOC = (Component: any): any => () => (
  <MyLayout >
    <Component />
  </MyLayout >
);

const App = () => {

  const sendMessage = async (token: string | null) => {
    const data = { token };
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const text = await res.text();
      // tslint:disable-next-line:no-console
      console.log(text)
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }
  React.useEffect(() => {
    if (!messaging) { return};

    messaging.requestPermission()
      .then(async () => {
        const token = await messaging.getToken();
        sendMessage(token)
      })
      .catch((err: any) => {
        // tslint:disable-next-line:no-console
        console.log("Unable to get permission to notify.", err);
      });    
  }, [])

  return (
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
}

export default App;
