import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sideLength = 130
    return (
      <div>
        <img src="/imgs/hand.png" width="100%"/>
        <div style={{paddingTop: 40}}>
          <div className="ui center aligned grid">
            <div className="center aligned eight wide column" style={{paddingLeft: 40}}>
              <div className="ui segment" style={{width: sideLength, height: sideLength}}>
                期刊投稿
              </div>
            </div>
            <div className="center aligned eight wide column" style={{paddingRight: 25}}>
              <div className="ui segment right floated " style={{width: sideLength, height: sideLength}}>
                行业会议
              </div>
            </div>

            <div className="center aligned eight wide column" style={{paddingLeft: 40}}>
              <div className="ui segment" style={{width: sideLength, height: sideLength}}>
                核电专家
              </div>
            </div>
            <div className="center aligned eight wide column" style={{paddingRight: 25}}>
              <div className="ui segment right floated " style={{width: sideLength, height: sideLength}}>
                企业宣传
              </div>
            </div>

            <div className="center aligned eight wide column" style={{paddingLeft: 40}}>
              <div className="ui segment" style={{width: sideLength, height: sideLength}}>
                著作出版
              </div>
            </div>
            <div className="center aligned eight wide column" style={{paddingRight: 25}}>
              <div className="ui segment right floated " style={{width: sideLength, height: sideLength}}>
                个人中心
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
