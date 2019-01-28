import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
// import 'tachyons/css/tachyons.css';

export const MyLayout = (props: {children:JSX.Element}):JSX.Element => (<div>
    {/* <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/topics">Topics</Link>
        </li>
    </ul> */}
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
          onLinkClick={(event, element: any) => {
            history.pushState({ wowow: 'sfasfasf'}, "page 2", "about");
          }}
          expandedStateText={'expanded'}
          collapsedStateText={'collapsed'}
          selectedKey={'key3'}
          expandButtonAriaLabel={'Expand or collapse'}
        />
    {props.children}
</div>);
