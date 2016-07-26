
import React from 'react';


export const Menu = ({activeItem}) => {
  const headerStyle = {
    backgroundColor: '#1B1C1D'
  }
  return (
    <div style={headerStyle}>
      <div className="ui container">
        <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <a className={activeItem==='home' ? 'active item' : 'item'} href="/">
              {'Semantic UI + FlowRouter Demo'}
            </a>
            <a className={activeItem==='about' ? 'active item' : 'item'} href="/about">
              关于
            </a>
            <div className="right menu">
              <a className={activeItem==='setting' ? 'active item' : 'item'} href="/setting">
                <i className="ui large setting icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
