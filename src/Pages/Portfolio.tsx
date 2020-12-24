import * as React from 'react';
import staticData from '../staticData';



export const Portfolio = () => (
    <div className="fl w-100 gotham primary pb4 ph3-ns ph2">
        {
            staticData.projects.map((port, key) => (<div className="cf flex items-center bg-white shadow-custom flex-row-l flex-column br4 center pv5 ph4 mt4 mw-custom" key={key} >
                <div className="w-70-l w-100 pa4-ns pa1 order-0-l order-2" data-aos="fade-right" data-aos-once="true" data-aos-duration="750">
                    <h2 className="f2 ma0 mb1">{port.title} </h2>
                    <h3 className="f4 ma0 black-70">{port.subtitle}</h3>
                    <p className="f4-l f6 justify lh-copy">
                        {port.details}
                    </p>
                    <p className="f4-l f6 i justify lh-copy black-70">
                        {port.contribution}
                    </p>
                </div>
                <div className="w-30-l w-100 pa2 mw5" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
                    <img src={port.image} className="w-100" />
                </div>
            </div>))
        }
    </div>
);