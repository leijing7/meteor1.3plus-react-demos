import React from 'react';

class CompanyList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMounted(){
    DocHead.setTitle('企业宣传')
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
        <h4>&nbsp;&nbsp; 理事长单位</h4>

        <div className="weui-flex" >
          <div className="weui-flex__item" style={imgBoxStyle}>
            <div></div>
          </div>
          <div className="weui-flex__item" style={contentBoxStyle}>
            <div style={{padding: 15}}>
              <p>书名: xxxx</p>
              <p>作者: xxxx</p>
              <p>定价: xxxx</p>
            </div>
          </div>
        </div>


        <a href="javascript:;" className="weui-btn weui-btn_plain-default" style={{width: '40%'} }>申请入会</a>

      </div>
    );
  }
}

export default CompanyList;
