import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';

export const Resume = ({match} : {match: any}) => (<MyLayout>
 <div>
    <div className="w-100 w-50-ns center">
        <h3>Resume</h3>
        <a href='https://docs.google.com/document/d/1AVwUQXhdXxwCX2ioL7IrUDo5rnO1vC1WZ61tfKW0t7I/export?format=pdf'>Download as PDF</a>

         <iframe className="resume" src="https://docs.google.com/document/d/1AVwUQXhdXxwCX2ioL7IrUDo5rnO1vC1WZ61tfKW0t7I/view" />
    </div>
</div>
</MyLayout>
);