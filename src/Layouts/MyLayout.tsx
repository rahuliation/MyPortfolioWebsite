import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Icon } from 'office-ui-fabric-react/lib/Icon';


const MenuItem = (props: any) => (
  <Link className={`${props.active ? 'b u bg-navy2 near-white' : ''} f7 f5-ns ttc track link bg-animate black-80 hover-white dib pa2-ns pa1 ph4-l`}
    to={props.path || '/'}
    style={{
      fontFamily: 'Roboto, sans-serif'
    }}>
    <div className={`b`}>
      <Icon iconName={props.icon} className="f3-l" /> <br />
      <span className="ttu tracked"> {props.name}</span>
    </div>
  </Link>
)


const Menu = (props: any) => (
  <div className="w-100  bg-gold navy mmenu pv2">
    <nav className="tc bt bb mw7 center">
      {
        props.menus.map((menu: any) => (
          <MenuItem
            {...menu}
            active={location.pathname === menu.path}
          />
        ))
      }
    </nav>
  </div>
)
const layout = ({ history, children, location }: { children: JSX.Element } & RouteComponentProps) => {

  const { menus } = layoutHooks();

  return (
    <div className="fl w-100" dir="ltr">
      <div
        className="pv3 bg-navy2 near-white pv6-l fixed w-30-l w-100"
        style={{
          minHeight: '100vh',
        }
        }
      >
        <Link to="/">
          <div className="w4-ns w4 center mb3">
            <img className="br-100 profilePic" src="/profilepic.jpg" alt="Rahul" />
          </div>
          <div className="tc" style={{ fontFamily: 'Viga, sans-serif', fontWeight: 300 }}>
            <span className="f1" >Rahul Barua</span>
            <br />
            <span className="f3 pv0">Software Engineer</span>
          </div>

        </Link>
        <br />
        <div className="tc absolute sans-serif w-100" style={{ bottom: '5rem' }}>
          <a href={process.env.REACT_APP_CV_DOWNLOAD_PDF} className="ph3 db pv2 b bb br shadow-2 button bg-gold2 near-white f6">
            <i className='im im-download f7' /> DOWNLOAD CV
          </a>
        </div>
        <div className="absolute f6 bottom-2-l bottom-0 tc w-100">
          <a href="https://facebook.com/rahuliation" target="_blank" > <i className='im im-facebook f5 pr3' /></a>
          <a href="https://twitter.com/rahuliation" target="_blank"> <i className='im im-twitter f5 pr3' /></a>
          <a href="https://github.com/rahuliation" target="_blank"> <i className='im im-github f5 pr3' /></a>
          <a href="mailto:mail@rahul.com.bd?Subject=Hello" target="_blank"> <i className='im im-mail f5 pr3' /></a>
          <a href="skype:rahul.workspace@gmail.com?call" target="_blank"> <i className='im im-skype f5 pr3' /> </a> <br /> <br />
        </div>

      </div>
      <div className="bg-near-white fl w-100 mbody">
        <Menu
          menus={menus}
        />
        <div className="fl w-100">
          {children}
        </div>
      </div>
    </div>
  );
}

const layoutHooks = () => {
  const [menus] = React.useState([
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
      key: 'contact',
      name: 'Contact',
      icon: 'Contact',
      path: '/contact',
    }
  ]);
  const [expand, setExpand] = React.useState<boolean>(true);
  return { menus, expand, setExpand }
}
export const MyLayout = withRouter(layout);