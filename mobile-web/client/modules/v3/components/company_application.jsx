import React from 'react';

class CompanyApplication extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMounted(){
    DocHead.setTitle('申请入会')
  }
  render() {
    return (
      <div>
        <div className="weui-cells__title">入会申请需要的信息</div>
        <div className="weui-cells">
          <div className="weui-cell">
            <div className="weui-cell__bd">
              <p>单位名称</p>
            </div>
          </div>
          <div className="weui-cell">
            <div className="weui-cell__bd">
              <p>理会级别</p>
            </div>
            <div className="weui-cell__ft"></div>
          </div>
          <div className="weui-cell">
            <div className="weui-cell__bd">
              <p>理事人选职位</p>
            </div>
            <div className="weui-cell__ft"></div>
          </div>
          <div className="weui-cell">
            <div className="weui-cell__bd">
              <p>编委人选专业</p>
            </div>
          </div>
          <div className="weui-cell">
            <div className="weui-cell__bd">
              <p>联系人</p>
            </div>
          </div>
          <div className="weui-cell">
            <div className="weui-cell__bd">
              <p>手机</p>
            </div>
          </div>
          <div className="weui-cell">
            <div className="weui-cell__bd">
              <p>邮箱</p>
            </div>
          </div>
          <div className="weui-cell">
            <div className="weui-cell__bd">
              <p>地址</p>
            </div>
          </div>
          <div className="weui-cell">
            <div className="weui-cell__bd">
              <p>《中国核电》理事会职责人</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyApplication;
