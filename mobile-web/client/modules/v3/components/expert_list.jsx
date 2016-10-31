import React from 'react';

class ExpertList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div style={{padding: 15}}>
            学术委员
          </div>
          <hr/>
          <div class="ui grid container" style={{paddingTop: 10, paddingBottom: 20}} onClick={()=>FlowRouter.go('/v3/expertdetail')}>
            <div class="four wide column">
              <img src='/imgs/zmx.jpeg' style={{width: '100%'}}/>
            </div>
            <div class="four wide column">
              <img src='/imgs/zmx.jpeg' style={{width: '100%'}}/>
            </div>
            <div class="four wide column">
              <img src='/imgs/zmx.jpeg' style={{width: '100%'}}/>
            </div>
            <div class="four wide column">
              <img src='/imgs/zmx.jpeg' style={{width: '100%'}}/>
            </div>
          </div>
        </div>
        <hr/>
        <div>
          <div style={{padding: 15}}>
            编辑委员
          </div>
          <hr/>
          <div class="ui grid container" style={{paddingTop: 10, paddingBottom: 20}} onClick={()=>FlowRouter.go('/v3/expertdetail')}>
            <div class="four wide column">
              <img src='/imgs/xingji.png' style={{width: '100%'}}/>
            </div>
            <div class="four wide column">
              <img src='/imgs/xingji.png' style={{width: '100%'}}/>
            </div>
            <div class="four wide column">
              <img src='/imgs/xingji.png' style={{width: '100%'}}/>
            </div>
            <div class="four wide column">
              <img src='/imgs/xingji.png' style={{width: '100%'}}/>
            </div>
          </div>
        </div>
        <hr/>
        <div>
          <div style={{padding: 15}}>
            审稿专家
          </div>
          <hr/>
          <div class="ui grid container" style={{paddingTop: 10, paddingBottom: 20}} onClick={()=>FlowRouter.go('/v3/expertdetail')}>
            <div class="four wide column">
              <img src='/imgs/yujunsong.png' style={{width: '100%'}}/>
            </div>
            <div class="four wide column">
              <img src='/imgs/yujunsong.png' style={{width: '100%'}}/>
            </div>
            <div class="four wide column">
              <img src='/imgs/yujunsong.png' style={{width: '100%'}}/>
            </div>
            <div class="four wide column">
              <img src='/imgs/yujunsong.png' style={{width: '100%'}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpertList;
