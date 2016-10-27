// import React from 'react';
import marked from 'marked'


class Notice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: this.props.text
    }
  }
  handleChange(event){
    this.setState({inputText: event.target.value})
  }
  saveBtnClicked(){
    const {save} = this.props
    save(this.props._id, {text: this.state.inputText})
  }
  render() {
    const previewStyle = {
      borderStyle: 'solid',
      borderColor: 'grey',
      borderWidth: 'thin',
      padding: 5,
      height: 580,
      listStylePosition: 'inside',
      overflow: 'auto'
    }
    return (
      <div>
        <h1>征稿启事 </h1>
          <div className="ui form">
            <div className="fields">
              <div className="eleven wide field">
                <label>编辑 (<a href="https://github.com/android-cn/blog/blob/master/dev-tool/markdown.md">支持 Markdown 格式</a>)</label>
                <textarea value={this.state.inputText} rows='34' placeholder="输入征稿启事" onChange={this.handleChange.bind(this)}/>
              </div>

              <div className="five wide field">
                <label style={{paddingBottom: 10}}>
                  预 览 <small>(真实效果见手机)</small>
                  <button className="compact mini ui primary button" style={{float: 'right'}} onClick={this.saveBtnClicked.bind(this)}>
                    保存
                  </button>
                </label>
                <div style={previewStyle}>
                  <div dangerouslySetInnerHTML={{__html: marked(this.state.inputText)}} />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Notice;
