import React from 'react';
import {Color} from '/lib/util';
import BarItem from './bar_item.jsx'

// const BarItem = (props) =>
//   <a href="javascript:;" className="weui_tabbar_item" onClick={props.clicked}>
//     <div className="weui_tabbar_icon">
//       <i className = {props.color + ' ' + props.icon + ' large icon'}/>
//     </div>
//     <p className="weui_tabbar_label"
//        style={{color: props.color}}>
//        {props.text}
//     </p>
//   </a>

export default class JournalFootBar extends React.Component {
  constructor(props) {
    super(props);
    this.items = {
      back: 'grey',
      journal: 'grey',
      search: 'grey',
      notice: 'grey',
      contact: 'grey'
    }
    this.items[this.props.item] = Color.primaryText
  }
  backClicked(){
    FlowRouter.go('/')
  }
  journalClicked(){
    FlowRouter.go('/journal')
  }
  searchClicked(){
    FlowRouter.go('/search')
  }
  noticeClicked(){
    FlowRouter.go('/notice')
    alert("Under construction...")
  }
  contactClicked(){
    FlowRouter.go('/contact')
  }
  render() {
    return (
      <div className="weui_tabbar">
        <BarItem text={'首页'}
         color={this.items.back}
         icon={'chevron left'}
         clicked={this.backClicked.bind(this)}/>

       <BarItem text={'投稿期刊'}
         color={this.items.journal}
         icon={'newspaper'}
         clicked={this.journalClicked.bind(this)}/>

       <BarItem text={'文章查询'}
         color={this.items.search}
         icon={'search'}
         clicked={this.searchClicked.bind(this)}/>

       <BarItem text={'征稿启事'}
         color={this.items.notice}
         icon={'info circle'}
         clicked={this.noticeClicked.bind(this)}/>

       <BarItem text={'联系小编'}
         color={this.items.contact}
         icon={'mail outline'}
         clicked={this.contactClicked.bind(this)}/>
      </div>
    );
  }
}

export default JournalFootBar;
