import * as React from "react";
import staticData from "../staticData";

export const Home = () => (
  <div className={`fl w-100 primary pb4 ph3-ns ph2`}>
    <div className="cf tc center w-100 bg-white br4 shadow-custom mt4 pv5 ph4 mw-custom">
      <span className="db center mw6 bg-navy2 gothamMedium  white pa3 f2-ns f4 br3 fw7 pa3 lh-title mv0 tracked-tight">
        {staticData.title}
      </span>
      <span className="db pb3 f3-l f4-m f5 mt5 fw1 i mid-gray" dangerouslySetInnerHTML={{
          __html: staticData.subtitle
      }}/>
        
      <span className="db f5 gotham tracked black-80">
        <i className="im im-location f6" /> {staticData.location}
      </span>
      <div
        className="center h7 f4-ns f5 lh-copy"
        dangerouslySetInnerHTML={{
          __html: staticData.description.replace(
            "%year%",
            (new Date().getMonth() > 8 ? new Date().getFullYear() - 2016 : new Date().getFullYear() - 2017).toString()
          ),
        }}
      />
    </div>
  </div>
);
