import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Icon } from 'office-ui-fabric-react/lib/Icon';

const MenuItem = (props: any) => (
  <Link className={`${props.active ? 'b menuActive primary' : 'mid-gray glow pointer'} f6 f5-ns ttc tracked-mega link dib pv2-ns ph4-ns pv1 ph2`}
    to={props.path || '/'}
   >
    <div className={`b`}>
      <Icon iconName={props.icon} className="f3-l" /> <br />
      <span className="ttu tracked"> {props.name}</span>
    </div>
  </Link>
)


const Menu = (props: any) => (
  <div className="w-100 bg-white shadow-2  navy mmenu pv2">
    <nav className="tc mw7 center">
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

  const { menus } = layoutHooks(history);

  return (
    <div className="fl w-100 bg-white2" dir="ltr">
      <div
        className="pv4 bg-navy2 near-white pv6-l fixed w-25-l w-100 vh-100 sidebar"
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
        <a href={process.env.REACT_APP_CV_DOWNLOAD_PDF}
          className="ph3 hover-light-yellow tc absolute sans-serif w-100 db pv2 b bb br button near-white f5"
          style={{ bottom: '5rem' }}>
          <i className='im im-download f7' /> DOWNLOAD CV
        </a>
        <div className="absolute f6 bottom-2-l bottom-0 tc w-100">
          <a href="https://facebook.com/rahuliation" target="_blank" > <i className='hover-light-yellow im im-facebook f5 pr3' /></a>
          <a href="https://twitter.com/rahuliation" target="_blank"> <i className='hover-light-yellow im im-twitter f5 pr3' /></a>
          <a href="https://github.com/rahuliation" target="_blank"> <i className='hover-light-yellow im im-github f5 pr3' /></a>
          <a href="mailto:mail@rahul.com.bd?Subject=Hello" target="_blank"> <i className='hover-light-yellow im im-mail f5 pr3' /></a>
          <a href="skype:rahul.workspace@gmail.com?call" target="_blank"> <i className='hover-light-yellow im im-skype f5 pr3' /> </a> <br /> <br />
        </div>

      </div>
      <div className="fl w-100 mbody bg-white2">
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

const layoutHooks = (history: any) => {
  const [menus] = React.useState([
    {
      key: 'home',
      name: 'Home',
      icon: 'home',
      path: '/',
    },
    {
      key: 'resume',
      name: 'Resume',
      icon: 'info',
      path: '/resume',
    },
    // {
    //   key: 'blog',
    //   name: 'Blog',
    //   icon: 'Handwriting',
    //   path: '/blog',
    // },
    // {
    //   key: 'portfolio',
    //   name: 'Portfolio',
    //   icon: 'Work',
    //   path: '/portfolio',
    // },
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