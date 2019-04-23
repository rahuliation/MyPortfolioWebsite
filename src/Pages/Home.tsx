import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';

export const Home = () => (<MyLayout>
    <div className="mw7 mt2 pa4 bg-white center tc" style={{ fontFamily: 'georgia, serif' }}>
        <h4 className="f1 tc mv0">Hello,<br /><small>I am Rahul Barua,</small></h4>
        <p className="measure f3 lh-copy">
            A Full Stack Software and Web Developer and NodeJS and ReactJS Specialist Based in Dhaka, Bangladesh.
        </p>
        <p className="f4 lh-copy">
            I have {(((new Date().getFullYear() * 12) + new Date().getMonth()  - 2017 * 12) / 12).toFixed(2) } years working experience in different 
            software company . Javascript, nodeJS Mongodb, express, featherjs, React, react native, electronjs are my top key skills and gathered experince through
            invoving myself in development of many desktop application , Web application. 
        </p>
        <p className="f4 lh-copy">
            Started my career as a Software Engineer and I got the opportunity to work in different companies with different teams and technologies. 
            From there, I learned a lot about Research and Development which is a key factor in order to solve newer
            problems.
        </p>
        <p className="f4 lh-copy">Having a Computer Science background, I look forward to learning and research more and more about new
            technology and ready to face all kinds of challenges with a view to establishing myself as someone with excellent creativity,
            professional skills and
            leadership abilities which I would love to implement in real life for making this world a much better place.
        </p>
    </div>
</MyLayout>
);