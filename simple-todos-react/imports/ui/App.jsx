import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
      windowWidth: window.innerWidth,
      clickedTaskText: ''
    };

    this.handleResize = this.handleResize.bind(this)
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleSubmit(event) {
    event.preventDefault(); //取消默认提交表格的动作,不然会自动刷新页面

    // 通过 React ref 获得输入的文本
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('tasks.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  oneItemClicked(taskText){
    this.setState({
      clickedTaskText: taskText
    })
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
          itemClicked={this.oneItemClicked.bind(this)}
        />
      );
    });
  }

  headerClicked(){
    alert('你点击了标题')
  }

  render() {
    // 注意这里使用的 style 对象
    const labelStyle = {
      color: 'magenta',
      fontSize: '2em'
    }
    return (
      <div className="container">
        <header>
          {/* 注意这里使用的 inline style */}
          <h1 style={{color: 'green'}} onClick={this.headerClicked}>
            Todo 列表 ({this.props.incompleteCount})
          </h1>

          <label style={labelStyle} className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            隐藏已完成的任务
          </label>

          <AccountsUIWrapper /> {/* 登录框 */}

          { this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks"
              />
            </form> : ''
          }
        </header>

        <ul>
          {this.renderTasks()}
        </ul>

        <div style={{padding: 10}}>当前窗口宽度: {this.state.windowWidth}</div>
        <div style={{padding: 10}}>被点击的任务: {this.state.clickedTaskText}</div>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};


// container 容器
// Meteor 利用 pub、sub 机制完成了前端数据和后端数据库的自动同步
// React 配合 Meteor，利用 mixin 自动更新同步到的数据
export default createContainer(() => {
  Meteor.subscribe('tasks');

  return {
    // 注意这里利用 MongoDB 进行排序
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, App);
