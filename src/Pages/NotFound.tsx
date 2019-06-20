import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';

export const NotFound = () => (<MyLayout>
    <div className="fl w-100 gotham primary">
        <div className="vh-70 tc">
            <span className="dt h-100 f5-l h6 b tracked">
                <span className="dtc v-mid w-30 f1-ns f2 fw7 grow">404 NOT FOUND</span>
            </span>
        </div>

    </div>
</MyLayout>
);