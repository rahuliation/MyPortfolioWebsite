import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';

export const Contact = ({ match }: { match: any }) => (
  <MyLayout>
    <div className="w-100 center bg-white2 pv4">
      <div className="mw8 cf  center pv5 ph4">
        <div className="fl w-100 bl bw3 pl3 pv3 gold">
          <span className="f1 db navy">CONTACT ME </span>
          <span className="f4 db navy">Get in touch with me</span>
        </div>

        <div className="fl w-100 pt5">
          <div className="fl w-40-l w-100">
            <span className="db pv2 f3">Contact Information</span>
            <span className="db f6 pt3"> <span className="b pr1">Address:</span> 123 Qwerty Avenue NYC, USA </span>ResumeResume
            <span className="db f6 pt3"><span className="b pr1">Phone:</span>+77 022 177 05 05</span>
            <span className="db f6 pt3"><span className="b pr1">Email:</span>example@gmail.com</span>
            <span className="db f6 pt3"><span className="b pr1">Website:</span>www.yourdomain.co</span>
          </div>
          <div className="fl w-60-l w-100">
            <form action="sign-up_submit" method="get" acceptCharset="utf-8">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                <div className="mt3 bb">
                  <input className="w-100 pa2 input-reset bg-transparent w-100 bn" placeholder="Your Name" type="text" name="name" />
                </div>
                <div className="mt3 bb">
                  <input className="w-100 b pa2 input-reset bg-transparent bn" type="email" name="email" placeholder="Your Email" />
                </div>
                <div className="mt3 bb">
                  <textarea className="w-100 b pa2 input-reset bg-transparent bn" placeholder="Your Message" name="message" cols={30} />
                </div>
              </fieldset>
              <div className="mt3">
                <button  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" >Send Mesage</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </MyLayout>
);