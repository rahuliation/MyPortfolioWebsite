import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';


export const MenuItem = (props: any) => (
  <Link 
    className={`f7 f5-ns ttc track link bg-animate black-80 hover-bg-lightest-blue dib pa2-ns pa1 ph4-l`} 
    to={props.path || '/'} 
    style={{ fontFamily: 'Roboto, sans-serif' }}
  >
    <div className={`${props.active ? 'b' : ''}`}>
      <Icon iconName={props.icon} className={` f3-l ${props.active ? 'b' : ''}`} /> <br />
        <span className="ttu tracked"> {props.name}</span>
    </div>
  </Link>
    )
    
const layout = ({history, children, location }: {children: JSX.Element } & RouteComponentProps) => (
  <div className="fl w-100" dir="ltr">
      <div
        className="pv6 fixed w-40-l w-100 bg-white"
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
          <p className="f6">Follow me </p>
          <a href="https://facebook.com/rahuliation" target="_blank"> <i style={{ color: '#3C5A99' }} className='im im-facebook' /></a>
          <a href="https://twitter.com/rahuliation" target="_blank"> <i style={{ color: '#1da1f2' }} className='im im-twitter' /></a>
          <a href="https://github.com/rahuliation" target="_blank"> <i style={{ color: '#333' }} className='im im-github' /></a>
          <a href="mailto:mail@rahul.com.bd?Subject=Hello" target="_blank"> <i style={{ color: '#f44242' }} className='im im-mail' /></a>
          <a href="skype:rahul.workspace@gmail.com?call" target="_blank"> <i style={{ color: '#1da1f2' }} className='im im-skype' /> </a> <br/>
          <PrimaryButton
                text="Download Resume"
                className="mt3"
                iconProps={{ iconName: 'download'}}
                href={process.env.REACT_APP_CV_DOWNLOAD_PDF}
                allowDisabledFocus={true}
          />
        </div>
      
      </div>
      <div className="bg-near-white fl w-100 mbody">
        <div className="w-100  bg-white mmenu pt1 ">
          <nav className="bt bb tc mw7 center">
            {
              [
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
                  icon: 'Handwriting',
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
              ].map(menu => (
                <MenuItem
                  {...menu}
                  active={location.pathname === menu.path}
                />
              ))
            }
          </nav>

        </div>
        <div className="fl w-100">
          {children}
        </div>
      </div>
    </div>
    );
    
export const MyLayout = withRouter(layout);