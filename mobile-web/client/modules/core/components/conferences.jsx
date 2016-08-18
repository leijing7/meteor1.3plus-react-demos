import React from 'react';
import {companies} from '/lib/mocking';
import {Color} from '/lib/util';

const borderStyle = {
  paddingLeft: 10,
  borderBottom: '0.5px solid ',
  borderBottomColor: Color.middleGray
}

const Conferences = () => (
  <div>
    <img src="imgs/home-top.png" width="100%"/>
    <p style={{fontSize: '1.1em', paddingLeft: 10, paddingTop: 10}}><strong> 2016 年核行业会议汇总 </strong></p>

    <div className="ui grid">

      <div className="row">
        <p style={{paddingLeft: 20, color: "blue"}}> 2016 年亚洲核工业技术管理论坛 </p>
      </div>
      <div className="row" style={borderStyle}>
        <div className="eight wide column">
        <i className="blue big calendar icon"/> 9月5日
        </div>
        <div className="eight wide column">
        <i className="blue big marker icon"/> 海淀区
        </div>
      </div>

      <div className="row">
        <p style={{paddingLeft: 20, color: "blue"}}> 2016 年亚洲核工业技术管理论坛 </p>
      </div>
      <div className="row" style={borderStyle}>
        <div className="eight wide column">
        <i className="blue big calendar icon"/> 9月5日
        </div>
        <div className="eight wide column">
        <i className="blue big marker icon"/> 海淀区
        </div>
      </div>
    </div>
  </div>
);

export default Conferences;
