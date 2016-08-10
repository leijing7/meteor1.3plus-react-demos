import React from 'react';
import {Color} from '/lib/util';

class JournalNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navBarClassName: ['active item', 'item', 'item'], navBar: 0 }
  }

  hottestClicked(){
    this.setState({ navBarClassName: ['active item', 'item', 'item'], navBar: 0 })
  }
  newestClicked(){
    this.setState({ navBarClassName: ['item', 'active item', 'item'], navBar: 1 })
  }
  historyClicked(){
    this.setState({ navBarClassName: ['item', 'item', 'active item'], navBar: 2 })
  }
  render(){
    const navBarStyle = {backgroundColor: Color.menuBgGray}
    return (
      <div style={navBarStyle} className="ui ">
        <div className="ui three item inverted menu" style={navBarStyle}>
          <a className="item" onClick={this.historyClicked.bind(this)}>
            核电期刊
          </a>
          <a className="item" onClick={this.hottestClicked.bind(this)}>
            投稿策略
          </a>
          <a className="item" onClick={this.newestClicked.bind(this)}>
            写作技巧
          </a>
        </div>
      </div>
    )
  }
}

export default JournalNavBar;
