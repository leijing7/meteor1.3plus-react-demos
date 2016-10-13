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
        <div className="weui_cell__ft">
          {name}
        </div>
      </div>
    </div>
    <div className="weui_cells">
      <div className="weui_cell">
        <div className="weui_cell_bd weui_cell_primary">
          <p><i className="call icon"/> 电话 </p>
        </div>
        <div className="weui_cell__ft">
          {phone}
        </div>
      </div>
      <div className="weui_cell">
        <div className="weui_cell_bd weui_cell_primary">
          <p><i className="mobile icon"/> 手机 </p>
        </div>
        <div className="weui_cell__ft">
          {mobile}
        </div>
      </div>
    </div>

    <div className="weui_cells">
      <div className="weui_cell">
        <div className="weui_cell_bd weui_cell_primary">
          <p><i className="green wechat icon"/> 微信 </p>
        </div>
        <div className="weui_cell__ft">
          {wechat}
        </div>
      </div>
      <div className="weui_cell">
        <div className="weui_cell_bd weui_cell_primary">
          <p><i className="mail icon"/> 邮箱 </p>
        </div>
        <div className="weui_cell__ft">
          {email}
        </div>
      </div>
    </div>

    <div className="weui_panel weui_panel_access">
      <div className="weui_panel_bd">
        <a href="javascript:void(0);" className="weui_media_box weui_media_appmsg">
            <div className="weui_media_bd">
                <p className="weui_media_title"><i className="home icon"/> 地址</p>
                <p className="weui_media_desc">{address}</p>
            </div>
        </a>
      </div>
    </div>
    <div style={{padding:10}}>{comment}</div>

    <JournalFootBar item={'contact'}/>
  </div>

export default EditorContact;
