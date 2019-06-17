import * as React from 'react';

export const CV = ({ match }: { match: any } ) => (<div className="mw7 w-100 center">
          
            <iframe className="fl w-100" style={{ height: '99vh' }} src={process.env.REACT_APP_CV_LINK} />
        </div>
    );