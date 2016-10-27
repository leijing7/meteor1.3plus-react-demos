import React from 'react';

const UserInfo = () => {
  DocHead.setTitle("个人中心")
  return (
    <div>
      <div style={{padding: 10}}>
        <img src='/imgs/zmx.jpeg' style={{display: 'block', margin: '0 auto'}}/>
      </div>
      <p style={{textAlign: 'center', paddingBottom: 15}}> User Name </p>
      <div className="ui divider"/>
        <div className="weui-cells">
        <a className="weui-cell weui-cell_access" href="javascript:;">
          <div className="weui-cell__bd">
            <p>期刊收藏</p>
          </div>
          <div className="weui-cell__ft"/>
        </a>
        <a className="weui-cell weui-cell_access" href="javascript:;">
          <div className="weui-cell__bd">
            <p>会议关注</p>
          </div>
          <div className="weui-cell__ft"/>
        </a>
        <a className="weui-cell weui-cell_access" href="javascript:;">
          <div className="weui-cell__bd">
            <p>意见反馈</p>
          </div>
          <div className="weui-cell__ft"/>
        </a>
      </div>
    </div>
  )
};

export default UserInfo;
