import React from 'react';

export default ErrorMsg = ({p}) =>
  <div className="ui grid">
    <div className="row">
      <div
        className="content"
        style={{ paddingTop: 20 }}>
        <span className="ui red header">
          提示:
        </span>
          &nbsp;&nbsp; {p}
      </div>
    </div>
  </div>
