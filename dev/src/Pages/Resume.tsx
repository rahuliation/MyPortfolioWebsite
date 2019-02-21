import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';
import { IButtonProps, PrimaryButton } from 'office-ui-fabric-react/lib/Button';

export const Resume = ({ match }: { match: any } & IButtonProps) => (<MyLayout>
    <div className="fl w-100">
        <div className="w-100 w-100-m w-50-l navy center relative">
            <h1 className="f1 lh-title tc">RESUME</h1>
            <PrimaryButton
                className="absolute"
                text="Download As PDF"
                href={process.env.REACT_APP_CV_DOWNLOAD_PDF}
                allowDisabledFocus={true}
            />       
            <iframe className="fl w-100" style={{ height: "85vh" }} src={process.env.REACT_APP_CV_LINK} />
        </div>
    </div>
</MyLayout>
);