// import React from 'react';

// 主要布局
export const PcLayout = ({menu, content}) => (
  <div>
    <div>{menu}</div>
    <div className="ui container" style={{paddingTop: 50}}>
      {content()}
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
    <div className="ui container" style={{paddingTop: 50}}>
      {content}
    </div>
  </div>
);
