import * as React from 'react';
import fetch from 'unfetch'


export const Contact = ({ match }: { match: any }) => {
  const { name, setName, email, setEmail,
    phone, setPhone, message, setMessage, sendMessage } = contactHook();
  return (
    <div className="fl w-100 gotham primary pb4 ph3-ns ph2">
      <div className="cf bg-white shadow-custom br4 center pv5 ph4 mt4 mw-custom">
        <div className="fl w-100 bl bw3 pl3 pv3 primary">
          <span className="f1-l f2 fw7 db navy gothamMedium">CONTACT ME </span>
          <span className="f4 db navy">Get in touch with me</span>
        </div>
        <div className="fl w-100 mt4">
          <div className="fl w-50-l w-100">
            <span className="db tracked pv2 b mid-gray f3 bb w-70 b--mid-gray">Contact Information</span>
            <p className="f5 gotham pl3  mid-gray">
              <span className="db pt3">
                <span className="b pr1">Address:</span>Uttara, Dhaka</span>
              <span className="db pt3">
                <span className="b pr1">Phone:</span>+880 1777 991622</span>
              <span className="db pt3">
                <span className="b pr1">Email:</span>mail@rahul.com.bd</span>
              <span className="db pt3">
                <span className="b pr1">Website:</span>www.rahul.com.bd
              </span>
            </p>
          </div>
          <div className="fl w-50-l w-100 mid-gray">
            <span className="db pv2 tracked bb mid-gray f3 b w-70 b--mid-gray">Send Me Message</span>
            <form action="sign-up_submit" method="get" accept-charset="utf-8">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <div className="mt3">
                  <span className="db pb2 fw5">Your Name: </span>
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-100 pa2 input-reset bg-transparent form-control"
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="mt3">
                  <span className="db pb2">Your Email Address: </span>
                  <input
                    className="w-100 pa2 input-reset bg-transparent form-control"
                    type="email"
                    name="_replyto"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt3">
                  <span className="db pb2">Your Phone Number: </span>
                  <input
                    className="w-100 pa2 input-reset bg-transparent form-control"
                    type="text"
                    pattern="[0-9]"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mt3">
                  <span className="db pb2">Any Message </span>
                  <textarea
                    className="w-100 pa2 input-reset bg-transparent form-control"
                    name="message"
                    placeholder="Write your message"
                    cols={30}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>
              </fieldset>
              <div className="mt3">
                <button
                  className="b br3 ph4 bg-navy2 white pv3 hover-bg-white  hover-navy input-reset ba grow pointer f5"
                  type="button"
                  onClick={sendMessage}
                >
                  <i className="f5 uil uil-message mr2"/>
                  Send Mesage
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};


const contactHook = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const sendMessage = async () => {
    const data  =  { name, _replyto: email, phone, message, _after: 'https://www.rahul.com.bd/contact' };
    try {
      const res = await fetch('https://mailthis.to/rahul.workspace@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const lol = await res.text(); 
      // tslint:disable-next-line:no-console
      location.href = 'https://mailthis.to/confirm'

      // tslint:disable-next-line:no-console
      console.log(lol);

    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }
  return {
    name, setName, email, setEmail,
    phone, setPhone, message, setMessage , sendMessage
  };
}