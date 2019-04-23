import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';

export const Resume = ({ match }: { match: any } ) => (
<MyLayout>
        <div className="mw7  center pt2">
          
            <iframe className="fl w-100" style={{ height: '90vh' }} src={process.env.REACT_APP_CV_LINK} />
        </div>
</MyLayout>
    );