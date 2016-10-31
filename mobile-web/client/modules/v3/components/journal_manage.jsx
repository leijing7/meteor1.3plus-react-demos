import React from 'react';

const JournalManage = () => (
  <div>
    <div className="weui-tab">
      <div className="weui-navbar">
        <div className="weui-navbar__item" onClick={()=>FlowRouter.go('/v3/journallist')}>
            科技期刊
        </div>
        <div className="weui-navbar__item weui-bar__item_on">
            期刊管理
        </div>
      </div>
      <div className="weui-tab__panel">

        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text">
              <h4 className="weui-media-box__title">最新通知:</h4>
              <p className="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </div>
          </div>
        </div>

        <div className="weui-cells__title">名片</div>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text">
              <h4 className="weui-media-box__title">《中国核电》</h4>
              <p>负责人: 王丹</p>
              <p>手机: 18423546654</p>
              <p>邮箱: 54445454@163.com</p>
              <p>微信: asdfas</p>
            </div>
          </div>
        </div>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text">
              <h4 className="weui-media-box__title">《世界核动力》</h4>
              <p>负责人: 小明</p>
              <p>手机: 18423546654</p>
              <p>邮箱: 54445454@163.com</p>
              <p>微信: asddddd</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
);

export default JournalManage;
