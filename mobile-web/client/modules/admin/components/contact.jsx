// import React from 'react';

const NonEditablForm = ({name, phone, mobile, wechat, email, address, comment}) =>
  <div>
    <div className="ui form" style={{paddingTop: 20}}>
      <div className="inline field">
        <label>姓名</label> <input type="text" value={name} style={{color:"grey"}} readOnly/>
      </div>
      <div className="inline field">
        <label>电话</label> <input type="text" value={phone} style={{color:"grey"}}  readOnly/>
      </div>
      <div className="inline field">
        <label>手机</label> <input type="text" value={mobile} style={{color:"grey"}}  readOnly/>
      </div>
      <div className="inline field">
        <label>微信</label> <input type="text" value={wechat} style={{color:"grey"}}  readOnly/>
      </div>
      <div className="inline field">
        <label>邮箱</label> <input type="text" value={email} style={{color:"grey"}}  readOnly/>
      </div>
      <div className="field">
        <label>地址</label> <input type="text" value={address} style={{color:"grey"}}  readOnly/>
      </div>
      <div className="field">
        <label>附加</label> <textarea rows='4' type="text" value={comment} style={{color:"grey"}}  readOnly/>
      </div>
    </div>
  </div>

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormEditable: false
    }
  }

  _save() {
    this.setState({ isFormEditable: false })

    const name = this.refs.name.value;
    const phone = this.refs.phone.value;
    const mobile = this.refs.mobile.value;
    const wechat = this.refs.wechat.value;
    const email = this.refs.email.value;
    const address = this.refs.address.value;
    const comment = this.refs.comment.value;
    const contact = {name, phone, mobile, wechat, email, address, comment}

    const {save} = this.props;
    save(this.props._id, contact);
  }

  _edit() {
    this.setState({ isFormEditable: true })
  }

  render() {
    return this.state.isFormEditable ? this.renderEditable() : this.renderNonEditable()
  }

  renderNonEditable() {
    return (
      <div>
        <h1>
          小编联系方式
          <button className="ui right floated blue labeled icon basic button" onClick={this._edit.bind(this)}>
            <i className="edit icon"/>修改
          </button>
        </h1>
        <hr />
        <NonEditablForm {...this.props}/>
      </div>
    );
  }

  renderEditable() {
    return (
      <div>
        <h1>
          小编联系方式
          <button className="ui right floated blue labeled icon button" onClick={this._save.bind(this)}>
            <i className="save icon"/>保存
          </button>
        </h1>
        <hr />
          { this.renderEditableForm() }
      </div>
    );
  }

  renderEditableForm() {
    return (
      <div className="ui form" style={{paddingTop: 20}}>
        <div className="inline field">
          <label>姓名</label> <input ref='name' type="text" defaultValue={this.props.name}/>
        </div>
        <div className="inline field">
          <label>电话</label> <input ref='phone' type="text" defaultValue={this.props.phone}/>
        </div>
        <div className="inline field">
          <label>手机</label> <input ref='mobile' type="text" defaultValue={this.props.mobile}/>
        </div>
        <div className="inline field">
          <label>微信</label> <input ref='wechat' type="text" defaultValue={this.props.wechat}/>
        </div>
        <div className="inline field">
          <label>邮箱</label> <input ref='email'  type="text" defaultValue={this.props.email}/>
        </div>
        <div className="field">
          <label>地址</label> <input ref='address' type="text" defaultValue={this.props.address}/>
        </div>
        <div className="field">
          <label>注释</label> <textarea ref='comment' rows='4' type="text" defaultValue={this.props.comment}/>
        </div>
      </div>
    )
  }
}

export default Contact;
