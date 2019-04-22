import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IOverflowSetItemProps, OverflowSet } from 'office-ui-fabric-react/lib/OverflowSet';
import { Icon } from 'office-ui-fabric-react/lib/Icon';


const MenuItem = (props: IOverflowSetItemProps) => (
<Link className="mh2" to={props.path || '/' }>
<div className="fl w-20 tc ma2 f6 b">
  <Icon iconName={props.icon} className="ms-IconExample" /> <br/>
  <span className=""> {props.name}</span>
</div>
</Link>
)

const layout = ({ history, children }: { children: JSX.Element } & RouteComponentProps) => (
  <div className="fl w-100" dir="ltr">
    <div
      className="pv5 fixed w-40-ns w-100 bg-white"
      style={{
        minHeight: '100vh',
      }
      }
    >
      <Link to="/">
        <div className="w5-ns w4 center mb2">
          <img className="br-100" src="/profilepic.jpg" alt="Rahul" />
        </div>
        <div className="tc" style={{ fontFamily: 'Viga, sans-serif', fontWeight: 300 }}>
          <span className="f1" >Rahul Barua</span>
          <br />
          <span className="f3 pv0">Software Engineer</span>
        </div>

      </Link>
      <br />
      <div className="tc">
        <a href="https://facebook.com/rahuliation"> <i style={{ color: '#3C5A99' }} className='im im-facebook' /></a>
        <a href="https://twitter.com/rahuliation"> <i style={{ color: '#1da1f2' }} className='im im-twitter' /></a>
        <a href="https://github.com/rahuliation"> <i style={{ color: '#333' }} className='im im-github' /></a>
        <a href="mailto:mail@rahul.com.bd?Subject=Hello"> <i style={{ color: '#f44242' }} className='im im-mail' /></a>
        <a href="skype:rahul.workspace@gmail.com?call"> <i style={{ color: '#1da1f2', paddingTop: '-20px' }} className='im im-skype' /> </a>
      </div>
    </div>
    <div className="bg-near-white fl w-100 mbody">
      <div className="w-100  bg-white mmenu">
        <OverflowSet
          className="w-40-l center"
          items={[
            {
              key: 'home',
              name: 'Home',
              icon: 'home',
              path: '/',
            },
            {
              key: 'about',
              name: 'About',
              icon: 'info',
              path: '/about',
            },
            {
              key: 'blog',
              name: 'Blog',
              icon: 'EditSolidMirrored12',
              path: '/blog',
            },
            {
              key: 'portfolio',
              name: 'Portfolio',
              icon: 'Work',
              path: '/portfolio',
            },
            {
              key: 'resume',
              name: 'Resume',
              icon: 'TextDocumentShared',
              path: '/resume',
            }
          ]}
          onRenderItem={(item: IOverflowSetItemProps): JSX.Element => 
            <MenuItem
              { ...item }
            />
          }
          onRenderOverflowButton={(item: any[] | undefined): JSX.Element => <></>
          }
        />
      </div>
      <div className="fl w-100">
        {children}
      </div>
    </div>
  </div>
);

export const MyLayout = withRouter(layout);