import * as React from 'react';
import { MyLayout } from 'src/Layouts/MyLayout';

export const Portfolio = () => (<MyLayout>
   <div className="w-100 center bg-white pv4">
      <div className="mw8 cf  center pv5 ph4">
        <div className="fl w-100 bl bw3 pl3 pv3 gold">
          <span className="f1 db navy"> Portfolio </span>
          <span className="f4 db navy">Get in touch with me</span>
        </div>

        <div className="fl w-100 pt5">
            content
        </div>
      </div>
    </div>
</MyLayout>
);