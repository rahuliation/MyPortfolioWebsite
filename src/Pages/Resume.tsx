import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';

export const Resume = () => {
  const { experiences } = ResumeHooks();
  return (<MyLayout>
    <div className="fl w-100">
      <div className="fl w-100 tc pl3 mv3 pv3">
        <span className="f3 b db navy">Work Experience</span></div>
      <div className="fl w-100  pl3">
        <section className="timeline-section">
          {
            experiences.map((exp: any) =>
              (<article className="relative timeline-item ph4 pv3 glow ">
                <div className="shadow-1 timeline-body">
                  <h1 className="f6 shadow-1 bg-navy2 white  black-60 mv0 pv3 ph3 timeline-date">{exp.timeline}</h1>
                  <div className="ph3 pv3 bt b--black-10 bg-white">
                    <h3 className="f4 mv0 pb1 code">{ exp.designition }</h3>
                    <h3 className="f5 mv0 pb3 black-70 code">{ exp.companyName }</h3>
                    <p className="f6 f5-ns mv0 lh-copy justify">
                     {exp.details}
                  </p>
                  </div>
                </div>
              </article>))
          }
        </section>
      </div>
    </div>
  </MyLayout>
  );
};

const ResumeHooks = () => {
  const [experiences] = React.useState([{
    timeline: 'December, 2018 - Present',
    companyName: 'INVARIANT TELECOM',
    designition: 'Software Engineer',
    details: 'I have already involved in two wonderful service like BUDDY and Wallet Service . Buddy is a ride sharing service and Wallet is a financial service. I contributed myself working with various technology like NodeJS, ExpressJS, MongoDB, VueJS. Build Restfull api and Back office pannels'
  },
  {
    timeline: 'March, 2018 - November, 2018',
    companyName: 'DOCTORKOI SMART',
    designition: 'Full Stack Javascript Developer',
    details: 'Doctorkoi SMART is prescription management software that helps Doctors to generate prescriptions within just few clicks. It requires few seconds to prepare a full prescription by using SMART. Doctors can customize prescription according to their needs. Medicines can be selected from 26,000+ registered drug lists. So there is no chance to make any mistake. I worked as a full stack javascript developer. '
  },
  {
    timeline: 'January, 2017 - February, 2018',
    companyName: 'UY SYSTEM LTD',
    designition: 'Web Developer',
    details: 'Its an outsourcing software company. I have done multiple projects of outsourcing clients. Project of tourism management like tripzip.tours and Ecommerce Solution is done by me . NodeJS , Laravel , ExpressJS, Mysql , Mongodb are used for providing solutions'
  }]);
  return { experiences };
}