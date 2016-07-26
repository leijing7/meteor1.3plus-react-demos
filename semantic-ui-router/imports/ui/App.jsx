import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className="ui container">
        <h4 className="ui red header">Red</h4>
      </div>
    )
  }
}
