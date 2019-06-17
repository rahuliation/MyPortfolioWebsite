import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';

export const Home = () => (<MyLayout>
    <div className="w-100 center bg-white2">
        <div className="sans-serif tc">
            <div className="pa4 pt5-ns ph4-l">
                <h3 className="tc lh-title mv0">
                    <span className="bg-navy2 lh-copy near-white tracked-tight">
                        Hello, I am 
                    </span>
                    <br/>
                    <span className="bg-navy2 lh-copy near-white tracked-tight">
                        Rahul Barua
                    </span>
                </h3>
                <h4 className="f3 fw1 georgia i">A Full Stack <b>NodeJS and ReactJS</b>  Web/Software Developer</h4>
                <h5 className="f6 ttu tracked black-80"> <i className="im im-location"/> Dhaka, Bangladesh.</h5>
            </div>
        </div>
        <div className="mw7 shadow-3 pa4 bg-white center justify" style={{ fontFamily: 'georgia, serif' }}>
            <div className="center h7">
                <p className="f5 lh-copy">
                    I have {Math.round(((new Date().getFullYear() * 12) + new Date().getMonth() - 2017 * 12) / 12)} years {(((new Date().getFullYear() * 12) + new Date().getMonth() - 2017 * 12) % 12)} months 
                    working experience in different software company. 
                    Javascript, nodeJS Mongodb, express, featherjs, React, react native, electronjs are my top key skills and gathered experince through
                    invoving myself in development of many desktop application , Web application.
                </p>
                <p className="f5 lh-copy">
                    Started my career as a Software Engineer and I got the opportunity to work in different companies with different teams and technologies.
                    From there, I  have learned a lot about Research and Development which is a key factor in order to solve newer problems.
                </p>
                <p className="f5 lh-copy">Having a Computer Science background, I look forward to learning and research more and more about new
                    technology and ready to face all kinds of challenges with a view to establishing myself as someone with excellent creativity,
                    professional skills and leadership abilities which I would love to implement in real life for making this world a much better place.
                </p>
            </div>
        </div>
    </div>
</MyLayout>
);