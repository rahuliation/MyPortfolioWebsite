import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';
import { IButtonProps, PrimaryButton } from 'office-ui-fabric-react/lib/Button';

export const Resume = ({ match }: { match: any } & IButtonProps) => (
<MyLayout>
        <div className="fl w-100 pt2">
            <PrimaryButton
                className=""
                text="Download As PDF"
                href={process.env.REACT_APP_CV_DOWNLOAD_PDF}
                allowDisabledFocus={true}
            />
            <iframe className="fl w-100" style={{ height: '85vh' }} src={process.env.REACT_APP_CV_LINK} />
        </div>
</MyLayout>
    );