import React from 'react';

class Experts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> 专家信息 </h1>
        <hr />
        照片 <br/>
        姓名 <br/>
        职位 <br/>
        描述 <br/>
      </div>
    );
  }
}

export default Experts;
