import React from 'react';
import JournalNavbar from './journal_navbar'


const JournalList = () => {
  const deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  const imgBoxStyle = {
    border: 'thin solid',
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderColor: 'grey',
    flex: 0.3,
    height: deviceWidth/3
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
      <JournalNavbar />
      <div className="weui-flex">
        <div className="weui-flex__item" style={imgBoxStyle}>
          <div></div>
        </div>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <p>中国社会科学</p>
            <p>主办单位: 中国社会科学院</p>
            <p>出版周期: 月刊</p>
            <p>ISSN: 1002-4921</p>
          </div>
        </div>
      </div>

      <div className="weui-flex">
        <div className="weui-flex__item" style={imgBoxStyle}>
          <div></div>
        </div>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <p>种植与养殖</p>
            <p>主办单位: 中国社会科学院</p>
            <p>出版周期: 月刊</p>
            <p>ISSN: 1002-4921</p>
          </div>
        </div>
      </div>

      <div className="weui-flex">
        <div className="weui-flex__item" style={imgBoxStyle}>
          <div></div>
        </div>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <p>区域与城市经济</p>
            <p>主办单位: 中国社会科学院</p>
            <p>出版周期: 月刊</p>
            <p>ISSN: 1002-4921</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JournalList;
