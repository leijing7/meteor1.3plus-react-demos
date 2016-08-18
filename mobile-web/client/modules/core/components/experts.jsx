import React from 'react';
import {experts} from '/lib/mocking';


const Experts = () => (
  <div>
    <img src="imgs/home-top.png" width="100%"/>
    <div className="weui_panel weui_panel_access">
    <div className="weui_panel_bd">
    {
      experts.map( (expert, idx) => {
        const imgStyle = { //crop this image to square to fit the UI
          background: 'url(' + expert.imgUrl + ') 50% 50% no-repeat',
          width: '100%',
          height: '100%'
        }
        return (
          <a href="javascript:void(0);" className="weui_media_box weui_media_appmsg" key={idx}>
            <div className="weui_media_hd">
              <div style={imgStyle}/>
            </div>
            <div className="weui_media_bd">
              <h4 className="weui_media_title">{expert.name}</h4>
              <p className="weui_media_desc">{expert.description}</p>
            </div>
          </a>
        )
      })
    }
    </div>
    </div>
  </div>
);

export default Experts;
