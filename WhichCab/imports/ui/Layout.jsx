import React from 'react';

// 主要布局
export const Layout = ({menu, content}) => (
  <div>
    <div>{menu}</div>
    <div className="ui container" style={{paddingTop: 50}}>
      <h1>出行比价 <span style={{color: "grey"}}><small>(北京)</small></span></h1>
      <hr />
      {content}
    </div>
  </div>
);

// 设置布局
export const SettingLayout = ({menu, content}) => (
  <div>
    <div>{menu}</div>
    <div className="ui container" style={{paddingTop: 50}}>
      <h1>设置</h1>
      <hr />
      {content}
    </div>
  </div>
);

// 账号布局
export const SimpleLayout = ({menu, content}) => (
  <div>
    <div>{menu}</div>
    <div className="ui container" style={{paddingTop: 160}}>
      {content}
    </div>
  </div>
);
