import React from 'react';
import marked from 'marked'
import {markdownGuide} from '/lib/mocking'

const listStyle = {
  listStylePosition: 'inside',
  padding: 10
}

class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  iconClicked(){
    const param = FlowRouter.getQueryParam('item')
    FlowRouter.go(`/journal?item=${param}`)
  }
  render() {
    const iconStyle ={
      position: 'fixed',
      right: 15,
      top: 15
    }
    return (
      <div>
        <i className="weui_icon_cancel" style={iconStyle} onClick={this.iconClicked.bind(this)}></i>
        <div dangerouslySetInnerHTML={{__html: marked(markdownGuide)}} style={listStyle}/>
      </div>
    );
  }
}

export default Post;
