import React from 'react';
import ReactDom from 'react-dom';

export default class PriceTable extends React.Component {
  btnClicked(){
    const inputDist = this.refs.distInput.value
    FlowRouter.go(`/p/${inputDist}?speed=40&city=beijing`) //注意 es6 的 template string 不是用的普通的单括号
  }
  render(){
    return (
      <div>
        <div className="ui labeled action input" style={{paddingTop: 50}}>
          <div className="ui label">
            公里数
          </div>
          <input type="number" placeholder="预测到目的地里程" ref="distInput" />
          <button className="ui orange right labeled icon button" onClick={()=>this.btnClicked()}>
            比较
            <i className="car icon"></i>
          </button>
        </div>
      </div>
    )
  }
}
