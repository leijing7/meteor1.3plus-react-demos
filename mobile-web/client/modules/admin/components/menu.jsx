// import React from 'react';
import {Color} from '/lib/util';

const Menu = ({activeItem, username}) => {
  const headerStyle = {
    backgroundColor: Color.darkSpaceGray
  }
  return (
    <div style={headerStyle}>
      <div className="ui container">
        <div className="ui inverted segment" style={headerStyle}>
          <div className="ui inverted secondary pointing menu" style={headerStyle}>
            <a className={activeItem === 'home' ? 'active item' : 'item'} href="/admin/home">
              管理员
            </a>
            <a className={activeItem === 'experts' ? 'active item' : 'item'} href="/admin/experts">
              专家专访
            </a>
            <a className={activeItem === 'companies' ? 'active item' : 'item'} href="/admin/companies">
              合作企业
            </a>
            <a className={activeItem === 'conferences' ? 'active item' : 'item'} href="/admin/conferences">
              行业会议
            </a>
            <a className={activeItem === 'notice' ? 'active item' : 'item'} href="/admin/notice">
              征稿启事
            </a>
            <a className={activeItem === 'contact' ? 'active item' : 'item'} href="/admin/contact">
              联系方式
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
};

export default Menu;
