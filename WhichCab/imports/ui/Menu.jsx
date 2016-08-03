
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import { Meteor } from 'meteor/meteor'

const MenuView = ({activeItem, username}) => {
  const headerStyle = {
    backgroundColor: '#1B1C1D'
  }
  return (
    <div style={headerStyle}>
      <div className="ui container">
        <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <a className={activeItem === 'home' ? 'active item' : 'item'} href="/">
              Meteor+React Demo
            </a>
            <a className={activeItem === 'about' ? 'active item' : 'item'} href="/about">
              关于
            </a>
            <div className="right menu">
              <a className={activeItem === 'account' ? 'active item' : 'item'} href="/a/login">
                {username || '登录'}
              </a>
              <a className={activeItem === 'setting' ? 'active item' : 'item'} href="/setting">
                <i className="ui setting icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function composer(props, onData) {
  const user = Meteor.user()
  const data = user ? {username: user.profile.name} : {username: ''}
  console.log(user);
  onData(null, data);
};

export default composeWithTracker(composer)(MenuView);
