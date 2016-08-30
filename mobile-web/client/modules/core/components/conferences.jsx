import React from 'react';
import {conferences} from '/lib/mocking';
import {Color} from '/lib/util';
import moment from "moment"

const borderStyle = {
  paddingLeft: 10,
  borderBottom: '0.5px solid ',
  borderBottomColor: Color.middleGray
}

const Item = ({name, date, suburb}) =>
  <div className="ui grid">
    <div className="row">
      <p style={{paddingLeft: 20, color: "blue"}}> {name} </p>
    </div>
    <div className="row" style={borderStyle}>
      <div className="eight wide column">
        <i className="blue big calendar icon"/> {moment(date).format('YYYY-MM-DD')}
      </div>
      <div className="eight wide column">
        <i className="blue big marker icon"/> {suburb}
      </div>
    </div>
  </div>

const Conferences = () => (
  <div>
    <img src="imgs/home-top.png" width="100%"/>
    <p style={{fontSize: '1.1em', paddingLeft: 10, paddingTop: 10}}><strong> 2016 年核行业会议汇总 </strong></p>

    {
      conferences.map( (conf, idx) => <Item {...conf} key={idx}/> )
    }

  </div>
);

export default Conferences;
