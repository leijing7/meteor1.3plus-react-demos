import React from 'react';


class Library extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    DocHead.setTitle('图书馆')
    const deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    const imgBoxStyle = {
      border: 'thin solid',
      borderColor: 'grey',
      flex: 0.3,
      height: deviceWidth/3,
      background: `linear-gradient(to top left,
             rgba(0,0,0,0) 0%,
             rgba(0,0,0,0) calc(50% - 0.8px),
             rgba(0,0,0,1) 50%,
             rgba(0,0,0,0) calc(50% + 0.8px),
             rgba(0,0,0,0) 100%),
         linear-gradient(to top right,
             rgba(0,0,0,0) 0%,
             rgba(0,0,0,0) calc(50% - 0.8px),
             rgba(0,0,0,1) 50%,
             rgba(0,0,0,0) calc(50% + 0.8px),
             rgba(0,0,0,0) 100%)`
    }
    return (
      <div>
        <div className="weui-tab">

          <div className="weui-navbar">
            <div className="weui-navbar__item" onClick={()=>FlowRouter.go('/v3/bookpub') }>
                图书出版
            </div>
            <div className="weui-navbar__item weui-bar__item_on">
                图书馆
            </div>
          </div>

          <div className="weui-tab__panel">
            <h4 style={{paddingTop: 10}}>&nbsp;&nbsp;&nbsp; 新书目录 </h4>
            <hr />
            <div className="weui-flex" onClick={()=>FlowRouter.go('/v3/journaldetail')} style={{paddingTop: 20}}>
              <div className="weui-flex__item" style={{flex:0.1}} />
              <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/bookdetail')}/>
              <div className="weui-flex__item" style={{flex:0.2}} />
              <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/journalmanage')}/>
              <div className="weui-flex__item" style={{flex:0.1}} />
            </div>
            <div className="weui-flex" onClick={()=>FlowRouter.go('/v3/journaldetail')} style={{paddingTop: 20}}>
              <div className="weui-flex__item" style={{flex:0.1}} />
              <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/journalmanage')}/>
              <div className="weui-flex__item" style={{flex:0.2}} />
              <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/journalmanage')}/>
              <div className="weui-flex__item" style={{flex:0.1}} />
            </div>
            <div className="weui-flex" onClick={()=>FlowRouter.go('/v3/journaldetail')} style={{paddingTop: 20}}>
              <div className="weui-flex__item" style={{flex:0.1}} />
              <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/journalmanage')}/>
              <div className="weui-flex__item" style={{flex:0.2}} />
              <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/journalmanage')}/>
              <div className="weui-flex__item" style={{flex:0.1}} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
