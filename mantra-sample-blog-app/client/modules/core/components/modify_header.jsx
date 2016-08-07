import React from 'react';

class ModifyHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {error} = this.props;
    return (
      <span>
        <button onClick={this._modify.bind(this)} style={{marginLeft: 10}}>修改标题</button>
        {error ? <span style={{color: 'red'}}>{error}</span> : null} {/* 空标题错误提示*/}
      </span>
    );
  }

  _modify() {
    const newTitle = prompt("修改标题", this.props.post.title)
    const postId = this.props.post._id
    const {modify} = this.props
    modify(postId, newTitle)
  }
}

export default ModifyHeader;
