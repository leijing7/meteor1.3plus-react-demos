import React from 'react';
import {Color} from '/lib/util';
import BarItem from './bar_item.jsx'


export default class FootBar extends React.Component {
  constructor(props) {
    super(props);
  }
  homeClicked(){
    FlowRouter.go('/')
  }
  journalClicked(){
    FlowRouter.go('/journal')
  }
  cooperationClicked(){
    FlowRouter.go('/co')
  }
  expertClicked(){
    FlowRouter.go('/experts')
  }
  conferenceClicked(){
    FlowRouter.go('/conf')
  }
  render() {
    this.items = {
      home: 'grey',
      journal: 'grey',
      cooperation: 'grey',
      experts: 'grey',
      conferences: 'grey'
    }
    this.items[FlowRouter.getRouteName()] = Color.primaryText
    return (
      <div className="weui_tabbar">
        <BarItem text={'首页'}
         color={this.items.home}
         icon={'home'}
         clicked={this.homeClicked.bind(this)}/>

        <BarItem text={'核电专家'}
         color={this.items.experts}
         icon={'student'}
         clicked={this.expertClicked.bind(this)}/>

       <BarItem text={'合作企业'}
        color={this.items.cooperation}
        icon={'users'}
        clicked={this.cooperationClicked.bind(this)}/>

       <BarItem text={'行业会议'}
         color={this.items.conferences}
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
