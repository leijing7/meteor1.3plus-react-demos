import React from 'react';
import {Color} from '/lib/util';

class JournalNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.navBarClassNames = ['item', 'item', 'item']
  }

  listClicked(){
    FlowRouter.go('/journal')
  }
  strategyClicked(){
    FlowRouter.go('/journal?item=strategy')
  }
  skillClicked(){
    FlowRouter.go('/journal?item=skill')
  }
  render(){
    const navBarStyle = {backgroundColor: Color.menuBgGray}
    const activeItem = FlowRouter.getQueryParam('item')
    switch (activeItem) {
      case 'strategy':
        this.navBarClassNames = ['item', 'active item', 'item']
        break;
      case 'skill':
        this.navBarClassNames = ['item', 'item', 'active item']
        break;
      default:
        this.navBarClassNames = ['active item', 'item', 'item']
    }
    return (
      <div style={navBarStyle} className="ui ">
        <div className="ui three item inverted menu" style={navBarStyle}>
          <a className={this.navBarClassNames[0]} onClick={this.listClicked.bind(this)}>
            核电期刊
          </a>
          <a className={this.navBarClassNames[1]} onClick={this.strategyClicked.bind(this)}>
            投稿策略
          </a>
          <a className={this.navBarClassNames[2]} onClick={this.skillClicked.bind(this)}>
            写作技巧
          </a>
        </div>
      </div>
    )
  }
}

export default JournalNavBar;
