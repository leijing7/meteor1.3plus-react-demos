import React from 'react';

class ExpertDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    DocHead.setTitle('名片行情')
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
        <div className="weui-flex" style={{paddingTop: 10}}>
          <div className="weui-flex__item" style={imgBoxStyle}>
            <div style={{border: 'thin solid', width: '80%', height: '80%', margin: 'auto' }}></div>
          </div>
          <div className="weui-flex__item" style={contentBoxStyle}>
            <div style={{padding: 5}}>
              <p>姓名: 甘肃省</p>
              <p>单位: 某某公司</p>
              <p>研究方向: 核磁共振</p>
            </div>
          </div>
        </div>
        <hr />
        <div style={{padding: 20}}>
          <h3>简介:</h3>
          <p>
            《中国社会科学》是中国社会科学院主管并主办的综合性社会科学期刊，1980年1月创刊，系月刊。主要发表我国人文社会科学领域最新和最重要的学术研究成果。创刊以来，《中国社会科学》始终坚持以马克思主义为指导，坚持正确的政治方向；坚持理论联系实际，关注重大现实问题；坚持刊物的学术性，追求学术创新和学术规范。
          </p>
        </div>
      </div>
    );
  }
}

export default ExpertDetail;
