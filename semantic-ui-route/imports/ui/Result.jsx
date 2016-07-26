import React from 'react';

const ResultView = ({dist, deal, diff, city, speed}) =>
  <div style={{paddingTop: 50}}>
    假设不同的车都会花一样的时间到达目的地，而城市里平均时速为 <span style={{color: 'red'}}>{speed}</span> 公里每小时
    <div style={{paddingTop: 25}}>
      <span style={{paddingRight: 50}}>
        距离目的地 <span style={{color: 'red', fontSize: '2em'}}>{dist}</span> 公里, 使用
      </span>
      <a className="ui red massive label">{deal}</a>

      <div className="ui red statistic" style={{paddingLeft: 100}}>
        <div className="value">
          {diff.toFixed(2)} <span style={{fontSize: '0.3em'}}>元</span>
        </div>
        <div className="label">
          节省
        </div>
      </div>
    </div>
  </div>


export default class Result extends React.Component{
  render(){
    const dist = Number(this.props.dist)
    const speed = Number(this.props.speed)
    const minutes = Math.round(dist / speed * 60)
    let diff = 1.3*dist + 0.3*minutes - 10 - (1.7*dist + 0.35*minutes - 15)

    let deal = "same"
    if (diff > 0) {
      deal = "Uber"
    }
    if (diff < 0) {
      deal = "滴滴"
      diff = Math.abs(diff)
    }
    return <ResultView {...{deal, diff, ...this.props}} />
  }
}
