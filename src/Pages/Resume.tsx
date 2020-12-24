import * as React from 'react';
import staticData from '../staticData';

export const Resume = () => (
    <div className="fl w-100 gotham primary pb4 ph3-ns ph2">
      <div className="cf center w-100 bg-white br4 shadow-custom mt4 pv3 mw-custom">
        <div className="fl w-100 tc mt3 mb4 pt4">
          <span className="f2-ns f3 db grow gothamMedium fw7">Skills</span>
        </div>
        <div className="flex flex-wrap pa3">
          {
            staticData.skills.map((skill, key) => (<div className="w-20-l w-third-m w-50 flex-auto pa2" key={key}>
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
              staticData.experience.map((exp: any, key) =>
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
              staticData.educations.map((edu: any, key) =>
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