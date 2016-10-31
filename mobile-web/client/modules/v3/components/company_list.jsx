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
      height: deviceWidth/3,
      padding: 10
    }
    const contentBoxStyle = {
      flex: 0.7,
      height: deviceWidth/3,
      paddingTop: 10
    }
    return (
      <div>
        <h3>理事长单位</h3>
        <hr/>
        <div className="weui-flex" style={{paddingTop: 10}} style={{borderBottom: 'thin solid'}} onClick={()=>{FlowRouter.go('/v3/companydetail')}}>
          <div className="weui-flex__item" style={imgBoxStyle}>
            <div style={{border: 'thin solid', width: '80%', height: '80%', margin: 'auto' }}></div>
          </div>
          <div className="weui-flex__item" style={contentBoxStyle}>
            <div style={{padding: 5}}>
              <p>中国核工业集团公司</p>
              <p>理事长: 钱智民</p>
            </div>
          </div>
        </div>

        <div className="weui-flex" style={{paddingTop: 10}} style={{borderBottom: 'thin solid'}} onClick={()=>{FlowRouter.go('/v3/companydetail')}}>
          <div className="weui-flex__item" style={imgBoxStyle}>
            <div style={{border: 'thin solid', width: '80%', height: '80%', margin: 'auto' }}></div>
          </div>
          <div className="weui-flex__item" style={contentBoxStyle}>
            <div style={{padding: 5}}>
              <p>中国核工业集团公司</p>
              <p>理事长: 钱智民</p>
            </div>
          </div>
        </div>

        <div className="weui-flex" style={{paddingTop: 10}} style={{borderBottom: 'thin solid'}} onClick={()=>{FlowRouter.go('/v3/companydetail')}}>
          <div className="weui-flex__item" style={imgBoxStyle}>
            <div style={{border: 'thin solid', width: '80%', height: '80%', margin: 'auto' }}></div>
          </div>
          <div className="weui-flex__item" style={contentBoxStyle}>
            <div style={{padding: 5}}>
              <p>中国核工业集团公司</p>
              <p>理事长: 钱智民</p>
            </div>
          </div>
        </div>


        <a href="/v3/companyapplication" className="weui-btn weui-btn_plain-default" style={{width: '40%', marginTop: 20}}>
          申请入会
        </a>

      </div>
    );
  }
}

export default CompanyList;
