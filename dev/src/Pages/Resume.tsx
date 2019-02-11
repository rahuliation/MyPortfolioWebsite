import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';

export const Resume = ({match} : {match: any}) => (<MyLayout>
 <div>
    <div className="w-100 w-50-ns center">
        <a href={process.env.REACT_APP_CV_DOWNLOAD_PDF}>Download as PDF</a>

         <iframe className="resume" src={process.env.REACT_APP_CV_LINK} />
    </div>
</div>
</MyLayout>
);