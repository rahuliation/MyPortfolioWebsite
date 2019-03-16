import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import 'office-ui-fabric-react/dist/css/fabric.min.css';
import { Link } from 'react-router-dom'

const layout = ({ history, children }: { children: JSX.Element } & RouteComponentProps) => (
  <div className="fl w-100" dir="ltr">
      <div
        className="pv4 fixed bg-white"
        style={{
          width: '250px',
          minHeight: '100vh',
        }
        }
      >
        <Link to="/">
          <div className="w4 center">
            <img className="br-100" src="/profilepic.jpg" alt="Rahul" />
          </div>
          <div className="">
            <img src="/logo.png" alt="Rahul" />
          </div>
        </Link>
        <Nav
          groups={[
            {
              links: [
                { name: 'About', icon:'info', url: '/about', key: 'key4' },
                { name: 'Portfolio', icon:'Work', url: '/portfolio', key: 'key4' },
                { name: 'Blog', icon:'EditNote', url: '/blog', key: 'key6' },
                { name: 'Resume', icon:'TextDocumentShared', url: '/resume', key: 'key6' },
              ]
            }
          ]}
          onLinkClick={(event: any, element: any) => {
            event.preventDefault();
            history.push(element.url);
          }}
          expandedStateText={'expanded'}
          collapsedStateText={'collapsed'}
          selectedKey={'key3'}
          expandButtonAriaLabel={'Expand or collapse'}
        />
      </div>
      <div
        className="bg-near-white fl w-100"
        style={{
          paddingLeft: '250px',
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
  </div>
);

export const MyLayout = withRouter(layout);