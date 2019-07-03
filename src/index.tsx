import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import 'node_modules/tachyons/css/tachyons.css';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
