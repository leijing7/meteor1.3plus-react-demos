import React from 'react';
import JournalNavbar from './journal_navbar'

class Library extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <JournalNavbar/>
        <h4>&nbsp;&nbsp;&nbsp; 新书目录 </h4>
        <hr />
      </div>
    );
  }
}

export default Library;
