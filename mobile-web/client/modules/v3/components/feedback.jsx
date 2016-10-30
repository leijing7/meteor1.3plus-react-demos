import React from 'react';

const Feedback = () => {
  DocHead.setTitle("意见反馈")
  return(
    <div>
      <div className="weui-cells__title" style={{paddingTop: 10}}>意见反馈方式</div>
      <div className="weui-cells">
        <div className="weui-cell">
          <div className="weui-cell__hd"><i className="call icon"/></div>
          <div className="weui-cell__bd">
            <p>电话</p>
          </div>
          <div className="weui-cell__ft">010-12345678</div>
        </div>
        <div className="weui-cell">
          <div className="weui-cell__hd"><i className="mobile icon"/></div>
          <div className="weui-cell__bd">
            <p>手机</p>
          </div>
          <div className="weui-cell__ft">13955544999</div>
        </div>
        <div className="weui-cell">
          <div className="weui-cell__hd"><i className="green wechat icon"/></div>
          <div className="weui-cell__bd">
            <p>微信</p>
          </div>
          <div className="weui-cell__ft">wechat id</div>
        </div>
        <div className="weui-cell">
          <div className="weui-cell__hd"><i className="mail icon"/></div>
          <div className="weui-cell__bd">
            <p>邮箱</p>
          </div>
          <div className="weui-cell__ft">aaa@bbb.com</div>
        </div>
        <div className="weui-cell">
          <div className="weui-cell__hd"><i className="home icon"/></div>
          <div className="weui-cell__bd">
            <p>地址</p>
          </div>
          <div className="weui-cell__ft">北京海淀区定淮门大街1000号</div>
        </div>
      </div>
    </div>
  )
};

export default Feedback;
