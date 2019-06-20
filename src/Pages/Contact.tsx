import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';

export const Contact = ({ match }: { match: any }) => (
  <MyLayout>
    <div className="fl w-100 gotham primary pb4 ph3">
      <div className="cf bg-white shadow-2 br4 center pv5 ph4 mt4 mw-custom">
        <div className="fl w-100 bl bw3 pl3 pv3 primary">
          <span className="f1-l f2 fw7 db navy">CONTACT ME </span>
          <span className="f4 db navy">Get in touch with me</span>
        </div>
        <div className="fl w-100 mt4">
          <div className="fl w-50-l w-100">
            <span className="db tracked pv2 b mid-gray f3">Contact Information</span>
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
            <span className="db pv2 b mid-gray f3">Send Message</span>
            <form action="sign-up_submit" method="get" accept-charset="utf-8">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <div className="mt3">
                  <span className="db pb2 fw5">Your Name: </span>
                  <input className="w-100 pa2 input-reset bg-transparent form-control" placeholder="Enter your name" type="text" name="name" />
                </div>
                <div className="mt3">
                  <span className="db pb2">Your Email Address: </span>
                  <input className="w-100 pa2 input-reset bg-transparent form-control" type="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="mt3">
                  <span className="db pb2">Your Phone Number: </span>
                  <input className="w-100 pa2 input-reset bg-transparent form-control" type="text" name="phone" placeholder="Enter your phone number" />
                </div>
                <div className="mt3">
                  <span className="db pb2">Any Message </span>
                  <textarea className="w-100 pa2 input-reset bg-transparent form-control" name="message" placeholder="Write your message" 
                    cols={30} />
                </div>
              </fieldset>
              <div className="mt3">
                <button className="b br3 ph4 bg-navy white pv3 input-reset ba bg-transparent mid-gray grow pointer f5" type="submit">Send Mesage</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </MyLayout>
);