import React from 'react';

class ModifyHeader extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <button onClick={this._modify.bind(this)} style={{marginLeft: 10}}>修改标题</button>
    );
  }

  _modify() {
    const newTitle = prompt("修改标题", this.props.post.title)
    const {create} = this.props;
    console.log(create,this.props, 9090);
    if (newTitle) {
      const postId = this.props.post._id
      console.log(postId, newTitle);
      create(postId, newTitle)
    }
    return
  }
}

export default ModifyHeader;
