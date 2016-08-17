import React from 'react';
import JournalFootBar from './journal_foot_bar';
import {Color} from '/lib/util';
import ArticleNavBar from './article_nav_bar';

const EditorContact = ({name, phone, mobile, wechat, email, address, comment}) =>
  <div>
    <div className="weui_cells_title">小编的联系方式</div>
    <div className="weui_cells">
      <div className="weui_cell">
        <div className="weui_cell_bd weui_cell_primary">
          <p><i className="blue user icon"/> 称呼 </p>
        </div>
        <div className="weui_cell_hd">
          {name}
        </div>
      </div>
    </div>
    <div className="weui_cells">
      <div className="weui_cell">
        <div className="weui_cell_bd weui_cell_primary">
          <p><i className="call icon"/> 电话 </p>
        </div>
        <div className="weui_cell_hd">
          {phone}
        </div>
      </div>
      <div className="weui_cell">
        <div className="weui_cell_bd weui_cell_primary">
          <p><i className="mobile icon"/> 手机 </p>
        </div>
        <div className="weui_cell_hd">
          {mobile}
        </div>
      </div>

    </div>
    <div className="weui_cells">
      <div className="weui_cell">
        <div className="weui_cell_bd weui_cell_primary">
          <p><i className="green wechat icon"/> 微信 </p>
        </div>
        <div className="weui_cell_hd">
          {wechat}
        </div>
      </div>
      <div className="weui_cell">
        <div className="weui_cell_bd weui_cell_primary">
          <p><i className="mail icon"/> 邮箱 </p>
        </div>
        <div className="weui_cell_hd">
          {email}
        </div>
      </div>
    </div>

    <div style={{paddingTop: 10}}>
    <div style={{padding:10}}>地址: {address}</div>

    <div style={{padding:10}}>{comment}</div>
    </div>

    <JournalFootBar item={'contact'}/>
  </div>

export default EditorContact;
