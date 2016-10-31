import React from 'react';

class ConferenceList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    DocHead.setTitle('行业会议')
    return (
      <div>
        <h3 style={{padding: 20}}>本学科近三个月内即将召开的学术会议</h3>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__hd">全部学科</div>
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text" onClick={()=>FlowRouter.go('/v3/conferencedetail')}>
              <h3 className="weui-media-box__title">纪念孙中山诞辰150周年学术研讨会</h3>
              <div className="weui-flex" >
                <div className="weui-flex__item" style={{flex: 0.2}}>
                  10-20
                </div>
                <div className="weui-flex__item" style={{flex: 0.6}}/>
                <div className="weui-flex__item" style={{flex: 0.2}}>
                  北京
                </div>
              </div>
            </div>
            <div className="weui-media-box weui-media-box_text" onClick={()=>FlowRouter.go('/v3/conferencedetail')}>
              <h3 className="weui-media-box__title">湖北省法学会诉讼法学研究会2016年年会</h3>
              <div className="weui-flex" >
                <div className="weui-flex__item" style={{flex: 0.2}}>
                  10-20
                </div>
                <div className="weui-flex__item" style={{flex: 0.6}}/>
                <div className="weui-flex__item" style={{flex: 0.2}}>
                  武汉
                </div>
              </div>
            </div>
            <div className="weui-media-box weui-media-box_text" onClick={()=>FlowRouter.go('/v3/conferencedetail')}>
              <h3 className="weui-media-box__title">第二届粤港澳台法学研讨会</h3>
              <div className="weui-flex" >
                <div className="weui-flex__item" style={{flex: 0.2}}>
                  10-20
                </div>
                <div className="weui-flex__item" style={{flex: 0.6}}/>
                <div className="weui-flex__item" style={{flex: 0.2}}>
                  深圳
                </div>
              </div>
            </div>
            <div className="weui-media-box weui-media-box_text" onClick={()=>FlowRouter.go('/v3/conferencedetail')}>
              <h3 className="weui-media-box__title">纪念孙中山诞辰150周年学术研讨会</h3>
              <div className="weui-flex" >
                <div className="weui-flex__item" style={{flex: 0.2}}>
                  10-20
                </div>
                <div className="weui-flex__item" style={{flex: 0.6}}/>
                <div className="weui-flex__item" style={{flex: 0.2}}>
                  南京
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ConferenceList;
