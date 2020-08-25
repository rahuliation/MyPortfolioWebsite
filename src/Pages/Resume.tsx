import * as React from 'react';
export const Resume = () => {
  const { experiences, educations, skills } = ResumeHooks();
  return (
    <div className="fl w-100 gotham primary pb4 ph3-ns ph2">
      <div className="cf center w-100 bg-white br4 shadow-custom mt4 pv3 mw-custom">
        <div className="fl w-100 tc mt3 mb4 pt4">
          <span className="f2-ns f3 db grow gothamMedium fw7">Skills</span>
        </div>
        <div className="flex flex-wrap pa3">
          {
            skills.map((skill, key) => (<div className="w-20-l w-third-m w-50 flex-auto pa2" key={key}>
              <article className="bg-white br3 pa3 ba grow b--black-10 tc"  >
                <i className={`h3 w3 dib f1-ns f2 ${skill.icon}`} />
                <h2 className="f4-ns f6 fw4 gray mt0">{skill.title}</h2>
              </article>
            </div>))
          }

        </div>
      </div>
      <div className="cf center w-100 bg-white br4 shadow-custom mt4 pv3 mw-custom" >
        <div className="fl w-100 tc mv3 pt4">
          <span className="f2-ns f3 gothamMedium fw7 db grow" data-aos="zoom-in" data-aos-once="true" >
            Work Experience
          </span>
        </div>
        <div className="fl pl4 w-100 pv3">
          <section className="timeline-section pv4">
            {
              experiences.map((exp: any, key) =>
                (<article
                  className="relative timeline-item ph4 "
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="750"
                  key={key}
                >
                  <div className="shadow-custom timeline-body br2">
                    <span className="db f5 shadow-custom bg-navy2  white pv3 ph3 timeline-date br2" data-aos="">
                      <span className="dt">
                        <span className="dtc ph3"> <i className="f3-l uil uil-calendar-alt white fw6" />   </span>
                        <span className="dtc v-mid fw7 ">{exp.timeline}</span>
                      </span>
                    </span>
                    <div className="ph3 pv3 bt b--black-10 bg-white">
                      <span className="db f3-ns f5 pb2 b">{exp.designition}</span>
                      <span className="dt f5-l f7 pb1 b mid-gray">
                        <span className="dtc  pr1 v-mid"> <i className="uil uil-building f5" /> </span>
                        <a className="dtc v-mid" href={exp.link} target="_blank">{exp.companyName}</a>
                      </span>
                      <p className="f6 f5-ns mv0 pv3 lh-copy justify">
                        {exp.details}
                      </p>
                      <span className="dt black-70">
                        <span className="dtc  pr1 v-mid"> <i className="f6 uil uil-location-point black" /> </span>
                        <span className="dtc f5 v-mid">{exp.location}</span>
                      </span>
                    </div>
                  </div>
                </article>))
            }
          </section>
        </div>
      </div>

      <div className="cf center w-100 br4 bg-white shadow-custom pv3 mt4 mw-custom">
        <div className="fl w-100 tc mv3 pt4">
          <span
            className="f2-ns f3 gothamMedium fw7 db grow "
            data-aos="zoom-in"
            data-aos-once="true"
          >
            Educational Qualification
          </span>
        </div>
        <div className="fl pl4 w-100 pv3">
          <section className="timeline-section pv4">
            {
              educations.map((edu: any, key) =>
                (<article
                  className="relative timeline-item ph4 glow "
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="750"
                  key={key}
                >
                  <div className="shadow-custom timeline-body">
                    <span className="db f5 shadow-custom bg-navy2 white pv3 ph3 timeline-date br2">
                      <span className="dt">
                        <span className="dtc ph3"> <i className="f3-l uil uil-calendar-alt white fw6" />  </span>
                        <span className="dtc v-mid fw7 ">{edu.timeline}</span>
                      </span>
                    </span>
                    <div className="ph3 pv3 bt b--black-10 bg-white">
                      <span className="db f3-ns f5 pb2 b">{edu.degree}</span>
                      <span className="dt f5-l f7 pb1 b mid-gray">
                        <span className="dtc  pr1 v-mid"><i className="uil uil-building f5" /> </span>
                        <a className="dtc v-mid" href={edu.link} target="_blank">
                          {edu.institute}
                        </a>
                      </span>

                      <table className="black-50 p tl pl3 pv3">
                        <tbody>
                          {
                            edu.result ? (
                              <tr>
                                <th className="pr2">Result</th>
                                <td>: {edu.result}</td>
                              </tr>
                            ) : undefined
                          }
                          {
                            edu.board ? (
                              <tr>
                                <th className="pr2">Board</th>
                                <td>: {edu.board}</td>
                              </tr>
                            ) : undefined
                          }
                          {
                            edu.location ? (
                              <tr>
                                <th className="pr2">Location</th>
                                <td>: {edu.location}</td>
                              </tr>
                            ) : undefined
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </article>))
            }
          </section>
        </div>
      </div>
    </div>
  );
};

const ResumeHooks = () => {
  const [experiences] = React.useState([{
    timeline: 'June, 2020 - Present',
    companyName: 'Ixora Solution Limited',
    designition: 'Sr. Software Engineer',
    location: 'Uttara, Dhaka, Bangladesh',
    link: 'https://ixorasolution.com',
    details: 'Involved in some american project. Here FeatherJS , ReactJS, Mobx are our stacks'
  }, {
    timeline: 'December, 2018 - May 2020',
    companyName: 'INVARIANT TELECOM',
    designition: 'Software Engineer',
    location: 'Mohakhali, Dhaka, Bangladesh',
    link: 'https://invarianttele.com/',
    details: 'I have already involved in 3 wonderful service like Dhamaka Digital, BUDDY and Wallet Service . Dhamaka is Multivendor Ecommerce Solution. Buddy is a ride sharing service and Wallet is a financial service. I contributed myself working with various technology like NodeJS, GraphQL, ExpressJS, MongoDB, VueJS. Build Restfull api and Back office pannels'
  },
  {
    timeline: 'March, 2018 - November, 2018',
    companyName: 'DOCTORKOI SMART',
    designition: 'Full Stack Javascript Developer',
    location: 'Mohammadpur, Dhaka, Bangladesh',
    link: 'https://www.doctorkoi.com/',
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






  const [skills] = React.useState<Array<{ icon: string, title: string }>>([
    {
      icon: 'devicon-javascript-plain colored',
      title: 'Javascript',
    }, {
      icon: 'devicon-nodejs-plain colored',
      title: 'NodeJS',
    }, {
      icon: 'devicon-express-original colored',
      title: 'Express',
    }, {
      icon: 'devicon-react-original colored',
      title: 'ReactJS',
    }, {
      icon: 'devicon-meteor-plain colored',
      title: 'MetorJS'
    },
    {
      icon: 'devicon-vuejs-plain colored',
      title: 'VueJS',
    }, {
      icon: 'devicon-bootstrap-plain colored',
      title: 'Bootstrap',
    }, {
      icon: 'devicon-php-plain colored',
      title: 'PHP',
    }, {
      icon: 'devicon-laravel-plain colored',
      title: 'Laravel',
    }, {
      icon: 'devicon-java-plain colored',
      title: 'JAVA',
    }, {
      icon: 'devicon-ruby-plain colored',
      title: 'Ruby'
    }, {
      icon: 'devicon-angularjs-plain colored',
      title: 'AngularJS',
    }, {
      icon: 'devicon-mysql-plain colored',
      title: 'MySQL',
    }, {
      icon: 'devicon-postgresql-plain colored',
      title: 'PostgreSQL',
    }, {
      icon: 'devicon-redis-plain colored',
      title: 'Redis',
    }, {
      icon: 'devicon-mongodb-plain colored',
      title: 'MongoDB'
    }, {
      icon: 'devicon-docker-plain colored',
      title: 'Docker',
    }, {
      icon: 'devicon-git-plain colored',
      title: 'Git',
    }, {
      icon: 'devicon-nginx-original colored',
      title: 'Nginx'
    }, {
      icon: 'devicon-linux-plain colored',
      title: 'Linux'
    }
  ]);


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


  return { experiences, educations, skills };
}