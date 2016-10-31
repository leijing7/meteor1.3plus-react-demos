import React from 'react';


class BookPub extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="weui-tab">

          <div className="weui-navbar">
            <div className="weui-navbar__item weui-bar__item_on">
                图书出版
            </div>
            <div className="weui-navbar__item" onClick={()=>FlowRouter.go('/v3/library')}>
                图书馆
            </div>
          </div>

          <div className="weui-tab__panel">

            <div className="weui-cells__title">图书出版</div>
            <div className="weui-cells weui-cells_form">
              <div className="weui-cell">
                <div className="weui-cell__hd"><label className="weui-label">作品名称</label></div>
                <div className="weui-cell__bd">
                  <input className="weui-input" placeholder="请输入作品名称"/>
                </div>
              </div>

              <div className="weui-cell">
                <div className="weui-cell__hd">
                  <label className="weui-label">版面数字</label>
                </div>
                <div className="weui-cell__bd">
                  <input className="weui-input" type="number" pattern="[0-9]*"  placeholder="请输入版面数字"/>
                </div>
              </div>

              <div className="weui-cell">
                <div className="weui-cell__hd"><label className="weui-label">开本</label></div>
                <div className="weui-cell__bd">
                  <input className="weui-input" placeholder="请输入开本"/>
                </div>
              </div>

              <div className="weui-cell">
                <div className="weui-cell__hd">
                  <label className="weui-label">页数</label>
                </div>
                <div className="weui-cell__bd">
                  <input className="weui-input" type="number" pattern="[0-9]*"  placeholder="请输入页数"/>
                </div>
              </div>

              <div className="weui-cell">
                <div className="weui-cell__hd">
                  <label className="weui-label">装帧</label>
                </div>
                <div className="weui-cell__bd">
                  <input className="weui-input" type="number" pattern="[0-9]*"  placeholder="平装/精装"/>
                </div>
              </div>
            </div>


            <div className="weui-cells__title">个人资料</div>
            <div className="weui-cells weui-cells_form">
              <div className="weui-cell">
                <div className="weui-cell__hd"><label className="weui-label">真实姓名</label></div>
                <div className="weui-cell__bd">
                  <input className="weui-input" placeholder="请输入真实姓名"/>
                </div>
              </div>

              <div className="weui-cell">
                <div className="weui-cell__hd">
                  <label className="weui-label">工作单位</label>
                </div>
                <div className="weui-cell__bd">
                  <input className="weui-input" type="number" pattern="[0-9]*"  placeholder="请输入工作单位"/>
                </div>
              </div>

              <div className="weui-cell">
                <div className="weui-cell__hd"><label className="weui-label">手机号</label></div>
                <div className="weui-cell__bd">
                  <input className="weui-input" placeholder="请输入手机号"/>
                </div>
              </div>

              <div className="weui-cell">
                <div className="weui-cell__hd">
                  <label className="weui-label">邮箱</label>
                </div>
                <div className="weui-cell__bd">
                  <input className="weui-input" type="number" pattern="[0-9]*"  placeholder="请输入邮箱"/>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default BookPub;
