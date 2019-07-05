import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Typing from 'react-typing-animation';

const MenuItem = (props: any) => (
  props.active ?
    (<span className="f7 f5-ns ttc tracked-mega link dib pv2-ns ph4-ns mb2 pv1 ph2 b menuActive primary pointer">
      <div className={`b`}>
        <i className={`f3-l ${props.icon}`}/> <br />
        <span className="ttu tracked"> {props.name}</span>
      </div>
    </span>)
    :
    (<Link 
      className="f7 f5-ns ttc tracked-mega link dib pv2-ns ph4-ns pv1 ph2 mid-gray glow pointer"
      to={props.path || '/'}
    >
      <div className={`b`}>
        <i className={`f3-l ${props.icon}`}/> <br />
        <span className="ttu tracked-mega"> {props.name}</span>
      </div>
    </Link>)
)


const Menu = (props: any) => (
  <div className="w-100 bg-white shadow-2 navy mmenu pv2" ref={props.navRef}>
    <nav className="tc mw7 center">
      {
        props.menus.map((menu: any, key: number) => (
          <MenuItem
            {...menu}
            key={key}
            active={location.pathname === menu.path}
          />
        ))
      }
    </nav>
  </div>
);

export const Social = (props: { className?: string, hoverClass?: string }) =>  ( <div className={`${props.className} social-icons`}>
{[{
  href: 'https://www.linkedin.com/in/rahul-workspace/',
  icon: 'uil uil-linkedin-alt'
},{
  href: 'https://facebook.com/rahuliation',
  icon: 'uil uil-facebook-f'
},
{
  href: 'https://github.com/rahuliation',
  icon: 'uil uil-github-alt'
},
{
  href: 'mailto:mail@rahul.com.bd?Subject=Hello',
  icon: 'uil uil-envelope-alt'
},
{
  href: 'skype:rahul.workspace@gmail.com?call',
  icon: 'uil uil-chat'
}
].map((val, key) => (<a href={val.href} 
target="_blank" 
className={`ba br-100 tc mr2 ${props.hoverClass}  b bw1 `}
key={key}
> 
<i className={`grow ${val.icon} f5`} />
</a>))}
</div>)

const layout = ({ history, children, location }: { children: JSX.Element } & RouteComponentProps) => {

  const { menus, scrollRef, scrollRef2, navRef } = layoutHooks(history);

  return (
    <div className="fl w-100 bg-white2" dir="ltr">
      <div
        className="pv4 ph2 bg-navy2 near-white pv6-l fixed w-25-l w-100 vh-100 sidebar"
      >
          <div className="w4-ns w4 center mb3">
            <img className="br-100 profilePic" src="/profilepic.jpg" alt="Rahul" />
          </div>
          <div className="tc" style={{ fontFamily: 'Viga, sans-serif', fontWeight: 300 }}>
            <span className="f1-ns f3" >Rahul Barua</span>
            <br />
            <span className="f3-ns f5 pv0"> Software Engineer </span>
            <div className="mt5-l mt4-m mt3 tc f2-ns f3 pv0 hidden-h400">
              <span className="f3-ns f4">I work with </span>
              <br />
              <Typing loop={true} className="dib" cursorClassName="white">
                {
                  [
                    'NodeJS.',
                    'ExpressJS.',
                    'ReactJS.',
                    'FeatherJS.',
                    'VueJS.',
                    'PHP, Laravel.'
                  ].map(text => (
                    <>
                      <span className="b">{text}</span>
                      <Typing.Delay ms={3000} />
                      <Typing.Backspace count={text.length} />
                    </>
                  ))
                }
                <Typing.Reset />
              </Typing>
            </div>
          </div>
        <br />
        <div className="absolute hidden-h500 w-100 bottom-2 overflow-x-hidden tc">
          <a href={process.env.REACT_APP_CV_DOWNLOAD_PDF}
            className="grow  ph3 hover-white sans-serif w-100 db pv2 b bb button near-white f5"
            style={{ bottom: '5rem' }}>
            <i className='im im-download f7' /> DOWNLOAD CV
          </a>
          <Social className="f6 pt3 w-100 cf" hoverClass="hover-bg-white hover-navy" />
        </div>
      </div>
      <div className="fl w-100 mbody bg-white2 "  ref={scrollRef} >
        <Menu menus={menus} navRef={navRef} />
        <div className="fl w-100 fadeIn animated" ref={scrollRef2} >
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
      icon: 'uil uil-home',
      path: '/',
    },
    {
      key: 'resume',
      name: 'Resume',
      icon: 'uil uil-document-layout-right',
      path: '/resume',
    },
    // {
    //   key: 'blog',
    //   name: 'Blog',
    //   icon: 'Handwriting',
    //   path: '/blog',
    // },
    {
      key: 'portfolio',
      name: 'Portfolio',
      icon: 'uil uil-suitcase-alt',
      path: '/portfolio',
    },
    {
      key: 'contact',
      name: 'Contact',
      icon: 'uil uil-phone',
      path: '/contact',
    }
  ]);
  const scrollRef = React.useRef<any>(null) // Hook to ref object
  const scrollRef2 = React.useRef<any>(null) // Hook to ref object
  const navRef = React.useRef<any>(null) // Hook to ref object


  history.listen((res: any) => {
    if (scrollRef.current && scrollRef.current.offsetTop) {
      window.scrollTo({
        top: scrollRef.current.offsetTop,
        behavior: 'smooth',
      });
    } else if(scrollRef2.current && scrollRef2.current.offsetTop){
      // tslint:disable-next-line:no-console
      console.log(navRef.current);
      window.scrollTo({
        top: scrollRef2.current.offsetTop - navRef.current.offsetHeight,
        behavior: 'smooth',
      });
    }
  });
  return { menus, scrollRef, scrollRef2, navRef }
}
export const MyLayout = withRouter(layout);