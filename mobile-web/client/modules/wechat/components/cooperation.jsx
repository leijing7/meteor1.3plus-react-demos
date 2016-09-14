import React from 'react';
import {Color} from '/lib/util.js'

const Cooperation = () => {
  const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  const divH = h/3

  const gridStyle = {
    height: divH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const iconStyle = {
    color: "grey"
  }
  const adStyle = {
    height: divH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: "linear-gradient(#fff0f7, #f49a9a)"
  }
  return (
    <div>
      <div className="ui equal width center aligned internally celled grid">
        <div className="row" style={gridStyle} onClick={()=>FlowRouter.go('/w/committee')}>
          <div style={{fontSize: '3.5em', color: Color.textColor}}>
            理事会
          </div>
        </div>
        <div className="row" style={adStyle}>
          <div style={{fontSize: '5em'}}>
            广告
          </div>
        </div>
        <div className="row" style={gridStyle} onClick={()=>FlowRouter.go('/w/committee')}>
          <div style={{fontSize: '3.5em', color: Color.textColor}}>
            供应商
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cooperation;
