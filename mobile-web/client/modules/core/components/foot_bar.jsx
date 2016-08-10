import React from 'react';
import {Color} from '/lib/util';

const BarItem = (props) =>
  <a href="javascript:;" className="weui_tabbar_item" onClick={props.clicked}>
    <div className="weui_tabbar_icon">
      <i className = {props.icon + ' large icon'} style={{color: props.color}}/>
    </div>
    <p className="weui_tabbar_label" style={{color: props.color}}>
       {props.text}
    </p>
  </a>

export default class FootBar extends React.Component {
  constructor(props) {
    super(props);
    this.items = {
      home: 'grey',
      journal: 'grey',
      cooperation: 'grey',
      expert: 'grey',
      conference: 'grey'
    }
    this.items[this.props.item] = Color.primaryText
  }
  homeClicked(){
    FlowRouter.go('/')
  }
  journalClicked(){
    FlowRouter.go('/journal')
  }
  cooperationClicked(){
    FlowRouter.go('/co')
    alert("Under construction...")
  }
  expertClicked(){
    FlowRouter.go('/expert')
    alert("Under construction...")
  }
  conferenceClicked(){
    FlowRouter.go('/conf')
    alert("Under construction...")
  }
  render() {
    return (
      <div className="weui_tabbar">
        <BarItem text={'首页'}
         color={this.items.home}
         icon={'home'}
         clicked={this.homeClicked.bind(this)}/>

        <BarItem text={'核电专家'}
         color={this.items.expert}
         icon={'student'}
         clicked={this.expertClicked.bind(this)}/>

       <BarItem text={'企业合作'}
        color={this.items.cooperation}
        icon={'users'}
        clicked={this.cooperationClicked.bind(this)}/>

       <BarItem text={'行业会议'}
         color={this.items.conference}
         icon={'list'}
         clicked={this.conferenceClicked.bind(this)}/>

       <BarItem text={'更多'}
        color={this.items.journal}
        icon={'chevron right'}
        clicked={this.journalClicked.bind(this)}/>
      </div>
    );
  }
}

export default FootBar;
