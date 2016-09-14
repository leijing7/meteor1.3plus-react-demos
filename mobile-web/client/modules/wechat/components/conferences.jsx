import React from 'react';
import {conferences} from '/lib/mocking';
import {Color} from '/lib/util';
import moment from "moment"

const borderStyle = {
  borderBottom: '0.5px solid ',
  borderBottomColor: Color.middleGray
}

const rightBoxStyle = {
  borderBottom: '0.5px solid ',
  borderBottomColor: Color.middleGray,
  borderLeft: '0.5px solid ',
  borderLeftColor: Color.middleGray,
}

const Item = ({name, date, suburb}) =>
  <div className="ui grid">
    <div className="twelve wide column" style={borderStyle}>
      <div className="row" style={{marginTop: 15}}>
        <p style={{paddingLeft: 10, color: Color.textColor}}> {name} </p>
      </div>
      <div className="row">
        <div className="ui grid">
          <div className="eight wide column">
            <span style={{paddingLeft: 10}}>{moment(date).format('YYYY-MM-DD')}</span>
          </div>
          <div className="eight wide column">
            {suburb}
          </div>
        </div>
      </div>
    </div>
    <div className="four wide column" style={rightBoxStyle}>
      <div style={{marginTop: 15}}>
        {moment(date).diff(moment(), 'days') > 0 ? moment(date).diff(moment(), 'days') : '已结束'}
      </div>
    </div>
  </div>

const Conferences = () => (
  <div>
    <img src="/imgs/home-top.png" width="100%"/>
    <div>
      {
        conferences.map( (conf, idx) => <Item {...conf} key={idx}/> )
      }
    </div>

  </div>
);

export default Conferences;
