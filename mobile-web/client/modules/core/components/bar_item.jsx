import React from 'react';

const BarItem = (props) => (
  <a href="javascript:;" className="weui_tabbar_item" onClick={props.clicked}>
    <div className="weui_tabbar_icon">
      <i className = {props.icon + ' large icon'} style={{color: props.color}}/>
    </div>
    <p className="weui_tabbar_label" style={{color: props.color}}>
       {props.text}
    </p>
  </a>
);

export default BarItem;
