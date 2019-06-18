import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';

export const Resume = () => {
  const { experiences, educations } = ResumeHooks();
  return (<MyLayout>
    <div className="fl w-100 bg-white2 pb4">
      <div className="fl w-100 tc mv3 pv4">
        <div className="fl w-100">
          <span className="f2 b db navy">Work Experience</span>
        </div>
      </div>
      <div className="fl ph6-l pl4 w-100 pv3">
        <section className="timeline-section pv4">
          {
            experiences.map((exp: any) =>
              (<article className="relative timeline-item ph4 glow ">
                <div className="shadow-1 timeline-body">
                  <h1 className="f5-l f6 shadow-2 bg-navy2 white  mv0 pv2 ph3 timeline-date">
                    <span className="dt">
                      <span className="dtc ph2"><i className="f5-l f6 im im-calendar mr1 mt2" /> </span>
                      <span className="dtc v-mid ">{exp.timeline}</span>
                    </span>
                  </h1>
                  <div className="ph3 pv3 bt b--black-10 bg-white">
                    <span className="db f3-l f4 pb1 navy b">{exp.designition}</span>
                    <span className="dt f5-l f6 pb1 b black-80">
                        <span className="dtc  pr1 v-mid"> <i className="im im-bank f5" /> </span>
                        <a className="dtc v-mid code" href={exp.link} target="_blank">{exp.companyName}</a>
                    </span>
                    <p className="f6 f5-ns mv0 pv3 lh-copy justify">
                      {exp.details}
                    </p>
                    <span className="dt black-70">
                        <span className="dtc  pr1 v-mid"> <i className="im im-location f6" /> </span>
                        <span className="dtc f5 v-mid">{exp.location}</span>
                    </span>
                  </div>
                </div>
              </article>))
          }
        </section>
      </div>

      <div className="fl w-100 tc mv3 pv4">
        <div className="fl w-100">
          <span className="f2 b db navy">Educational Qualification</span>
        </div>
      </div>
      <div className="fl ph6-l pl4 w-100 pv3">
        <section className="timeline-section pv4">
          {
            educations.map((edu: any) =>
              (<article className="relative timeline-item ph4 glow ">
                <div className="shadow-1 timeline-body">
                  <h1 className="f5-l f6 shadow-2 bg-navy2 white  mv0 pv2 ph3 timeline-date">
                    <span className="dt">
                      <span className="dtc ph2"><i className="f5-l f6 im im-calendar mr1 mt2" /> </span>
                      <span className="dtc v-mid ">{edu.timeline}</span>
                    </span>
                  </h1>
                  <div className="ph3 pv3 bt b--black-10 bg-white">
                    <span className="db f3-l f4 pb1 navy b">{edu.degree}</span>
                    <span className="dt f5-l f6 pb1 b black-80">
                        <span className="dtc  pr1 v-mid"> <i className="im im-bank f5" /> </span>
                        <a className="dtc v-mid code" href={edu.link} target="_blank">{edu.institute}</a>
                    </span>
                    <p className="f6 pv2 f5-ns mv0 lh-copy justify">
                     
                      {
                        edu.result ? (
                          <span className="dt">
                            <span className="dtc ph2 v-mid b"> Result </span>
                            <span className="dtc v-mid">: {edu.result}</span>
                          </span>
                        ) : undefined
                      }
                      {
                        edu.board ? (
                          <span className="dt">
                            <span className="dtc ph2 v-mid b"> Board </span>
                            <span className="dtc v-mid">: {edu.board}</span>
                          </span>
                        ) : undefined
                      }
                      {
                        edu.location ? (
                          <span className="dt">
                            <span className="dtc ph2 v-mid b"> Location </span>
                            <span className="dtc v-mid">: {edu.location}</span>
                          </span>
                        ) : undefined
                      }
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
    location: 'Mohakhali, Dhaka, Bangladesh',
    link: 'https://www.doctorkoi.com/',
    details: 'I have already involved in two wonderful service like BUDDY and Wallet Service . Buddy is a ride sharing service and Wallet is a financial service. I contributed myself working with various technology like NodeJS, ExpressJS, MongoDB, VueJS. Build Restfull api and Back office pannels'
  },
  {
    timeline: 'March, 2018 - November, 2018',
    companyName: 'DOCTORKOI SMART',
    designition: 'Full Stack Javascript Developer',
    location: 'Mohammadpur, Dhaka, Bangladesh',
    link: 'https://invarianttele.com/',
    details: 'Doctorkoi SMART is prescription management software that helps Doctors to generate prescriptions within just few clicks. It requires few seconds to prepare a full prescription by using SMART. Doctors can customize prescription according to their needs. Medicines can be selected from 26,000+ registered drug lists. So there is no chance to make any mistake. I worked as a full stack javascript developer. ReactJS, Featherjs, ElectronJS and many more things are used'
  },
  {
    timeline: 'January, 2017 - February, 2018',
    companyName: 'UY SYSTEM LTD',
    designition: 'Web Developer',
    link: 'https://www.uysys.com/',
    location: 'Mohakhali, Dhaka, Bangladesh',
    details: 'Its an outsourcing software company. I have done multiple projects of outsourcing clients. Project of tourism management like tripzip.tours and Ecommerce Solution is done by me . NodeJS , Laravel , ExpressJS, Mysql , Mongodb are used for providing solutions'
  }]);






  const [educations] = React.useState([{
    timeline: '2013-2016',
    institute: 'INTERNATIONAL UNIVERSITY OF BUSINESS AGRICULTURE AND TECHNOLOGY (IUBAT)',
    degree: 'Bachelor of Computer Science and Engineering',
    result: 'CGPA 3.19 (out of 4)',
    board: null,
    location: 'Uttara, Dhaka, Bangladesh'
  },
  {
    timeline: '2009 - 2012',
    institute: 'DHAKA POLYTECHNIC INSTITUTE',
    degree: 'Diploma in Engineering',
    result: null,
    board: 'Dhaka Board',
    location: 'Tejgaon, Dhaka, Bangladesh'
  },
  {
    timeline: '2006-2008',
    institute: 'MIRPUR BANGLA HIGH SCHOOL',
    degree: 'Secondary School Certificate (SSC)',
    result: 'GPA 4.5 (out of 5)',
    board: 'Dhaka Board',
    location: 'Mirpur, Dhaka, Bangladesh'
  }]);

  return { experiences, educations };
}