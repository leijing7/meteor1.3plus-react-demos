import React, { Component } from 'react';
import CountContainer from './count.jsx';

// App 组件 - 代表整个页面。
// 这个是一个简单的 app，所以没有使用 router，真正的单个页面
export default class App extends Component {
  //构造函数，被 import 时自动执行
  constructor(props){
    super(props) //继承父组件的属性
    this.state = {  // 初始化状态
      count: 0
    }
  }
  //按钮点击事件函数
  btnClicked(){
    console.log('The button was clicked, the previous count is: ', this.state.count);
    this.setState({ // 设置新状态
      count: ++this.state.count
    })
    // 调用服务器端 method, 保存点击次数到服务器端 mongodb 数据库
    Meteor.call('saveCount', this.state.count)
  }
  render() {
    return (
      <div>
        <header>
          <h1>Click below button to try reactive programming 相应式编程</h1>
        </header>

        <button onClick={this.btnClicked.bind(this)}> Click </button>

        <CountContainer /> {/* 点击次数组件 */}
      </div>
    );
  }
}
