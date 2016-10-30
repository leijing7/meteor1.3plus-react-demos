import React from 'react';

class CompanyApplication extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMounted(){
    DocHead.setTitle('申请入会')
  }
  render() {
    return (
      <div>
        CompanyApplication
      </div>
    );
  }
}

export default CompanyApplication;
