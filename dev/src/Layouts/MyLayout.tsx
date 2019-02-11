import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import 'office-ui-fabric-react/dist/css/fabric.min.css';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';

const layout = ({ history, children }: { children: JSX.Element } & RouteComponentProps) => (
  <div className="ms-Grid" dir="ltr">
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
        <Persona
          size={PersonaSize.extraLarge}
        />
        <Nav
          groups={[
            {
              links: [
                { name: 'Home', url: '/', key: 'key5' },
                { name: 'About', url: '/about', key: 'key4' },
                { name: 'Resume', url: '/resume', key: 'key6' },
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
      <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
        {children}
      </div>
    </div>
  </div>
);

export const MyLayout = withRouter(layout);