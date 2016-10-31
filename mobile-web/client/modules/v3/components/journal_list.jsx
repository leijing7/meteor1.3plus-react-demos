import React from 'react';


const JournalList = () => {
  DocHead.setTitle('期刊投稿')
  // DocHead.addMeta({name:"format-detection", content:"telephone=no"})
  const deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  const imgBoxStyle = {
    border: 'thin solid',
    borderRightWidth: 0,
    borderTopWidth: 0,
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
  const contentBoxStyle = {
    border: 'thin solid',
    borderColor: 'grey',
    borderTopWidth: 0,
    flex: 0.7,
    height: deviceWidth/3,
    fontSize: '0.95em'
  }
  return (
    <div>
      <div className="weui-tab">
        <div className="weui-navbar">
          <div className="weui-navbar__item weui-bar__item_on">
              科技期刊
          </div>
          <div className="weui-navbar__item" onClick={()=>FlowRouter.go('/v3/journalmanage')}>
              期刊管理
          </div>
        </div>
        <div className="weui-tab__panel">

      <div className="weui-flex" onClick={()=>FlowRouter.go('/v3/journaldetail')}>
        <div className="weui-flex__item" style={imgBoxStyle} />
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <h4>中国社会科学</h4>
            <p>主办单位: 中国社会科学院</p>
            <p>出版周期: 月刊</p>
            <p>ISSN: 1002-4921</p>
          </div>
        </div>
      </div>

      <div className="weui-flex" onClick={()=>FlowRouter.go('/v3/journaldetail')}>
        <div className="weui-flex__item" style={imgBoxStyle}>
          <div></div>
        </div>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <h4>种植与养殖</h4>
            <p>主办单位: 中国社会科学院</p>
            <p>出版周期: 月刊</p>
            <p>ISSN: 1002-4921</p>
          </div>
        </div>
      </div>

      <div className="weui-flex" onClick={()=>FlowRouter.go('/v3/journaldetail')}>
        <div className="weui-flex__item" style={imgBoxStyle}>
          <div></div>
        </div>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <h4>区域与城市经济</h4>
            <p>主办单位: 中国社会科学院</p>
            <p>出版周期: 月刊</p>
            <p>ISSN: 1002-4921</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default JournalList;
