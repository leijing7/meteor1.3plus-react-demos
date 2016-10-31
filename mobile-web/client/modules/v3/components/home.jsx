import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    DocHead.setTitle('原子能出版社')
    const sideLength = 125
    const boxStyle = {
      width: sideLength,
      height: sideLength,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    return (
      <div>
        <img src="/imgs/hand.png" width="100%"/>
        <div className="ui container" style={{paddingTop: 40}} >
          <div className="ui two column grid" >
            <div className="center aligned column">
              <div className="ui segment" style={boxStyle} onClick={()=>FlowRouter.go('/v3/journallist')}>
                期刊投稿
              </div>
            </div>
            <div className="center aligned column">
              <div className="ui segment" style={boxStyle} onClick={()=>FlowRouter.go('/v3/conferencelist')}>
                行业会议
              </div>
            </div>

            <div className="center aligned column">
              <div className="ui segment" style={boxStyle} onClick={()=>FlowRouter.go('/v3/expertlist')}>
                核电专家
              </div>
            </div>
            <div className="center aligned column">
              <div className="ui segment" style={boxStyle}>
                企业宣传
              </div>
            </div>

            <div className="center aligned column">
              <div className="ui segment" style={boxStyle}>
                著作出版
              </div>
            </div>
            <div className="center aligned column">
              <div className="ui segment" style={boxStyle}>
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
