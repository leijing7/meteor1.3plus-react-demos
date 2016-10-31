import React from 'react';

class CompanyDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMounted(){
    DocHead.setTitle('图书详情')
  }
  render() {
    const deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    const imgBoxStyle = {
      flex: 0.3,
      height: deviceWidth/3
    }
    const contentBoxStyle = {
      flex: 0.7,
      height: deviceWidth/3
    }
    return (
      <div>
        <div className="weui-flex" >
          <div className="weui-flex__item" style={imgBoxStyle}>
            <div></div>
          </div>
          <div className="weui-flex__item" style={contentBoxStyle}>
            <div style={{padding: 15}}>
              <p>公司名称: xxxx</p>
              <p>理事: xxxx</p>
            </div>
          </div>
        </div>
        <hr/>
        <div style={{padding: 10}}>
          <h3>内容简介</h3>
          <p style={{paddingBottom: 50}}>
            兴通讯是全球领先的综合通信解决方案提供商。公司通过为全球160多个国家和地区的电信运营商和企业网客户提供创新技术与产品解决方案，让全世界用户享有语音、数据、多媒体、无线宽带等全方位沟通。公司成立于1985年，在香港和深圳两地上市，是中国最大的通信设备上市公司。
          </p>
        </div>
        <hr/>
        <div style={{paddingTop: 30}}>
          <a href="/v3/companyapplication" className="weui-btn weui-btn_plain-default" style={{width: '40%', marginTop: 20}}>
            申请入会
          </a>
        </div>
      </div>
    );
  }
}

export default CompanyDetail;
