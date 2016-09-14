import React from 'react';
import {Color} from '/lib/util.js'

const Atom = () => {
  const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  const divH = h/3

  const gridStyle = {
    height: divH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const adStyle = {
    height: divH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: "linear-gradient(#fff0f7, #f49a9a)"
  }
  const iconStyle = {
    color: "grey"
  }
  const textStyle = {
    fontSize: '1.4em',
    color: Color.textColor
  }
  return (
    <div>
      <div className="ui equal width center aligned internally celled grid">
        <div className="row">
          <div className="column" style={gridStyle} onClick={()=>FlowRouter.go('/w/notice')}>
            <div>
              <i className="huge info circle icon" style={iconStyle}/>
              <br />
              <br />
              <span style={textStyle}>投稿启事</span>
            </div>
          </div>
          <div className="column" style={gridStyle} onClick={()=>FlowRouter.go('/w/status')}>
            <div>
              <i className="huge file text icon" style={iconStyle}/>
              <br />
              <br />
              <span style={textStyle}>稿件状态</span>
            </div>
          </div>
        </div>
        <div className="row" style={adStyle}>
          <div style={{fontSize: '5em'}}>
            广告
          </div>
        </div>
        <div className="row">
          <div className="column" style={gridStyle} onClick={()=>FlowRouter.go('/w/pay')}>
            <div>
              <i className="huge credit card alternative icon" style={iconStyle}/>
              <br />
              <br />
              <span style={textStyle}>缴纳版费</span>
            </div>
          </div>
          <div className="column" style={gridStyle} onClick={()=>FlowRouter.go('/w/contact')}>
            <div>
              <i className="huge fax icon" style={iconStyle}/>
              <br />
              <br />
              <span style={textStyle}>联系我们</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Atom;
