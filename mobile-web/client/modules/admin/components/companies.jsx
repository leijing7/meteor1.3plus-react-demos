// import React from 'react';
import {companies} from '/lib/mocking';

const TableRow = ({committee, title, name}) =>
  <tr>
    <td>{committee}</td>
    <td>{title}</td>
    <td>{name}</td>
    <td><i className="blue edit icon" /></td>
  </tr>

const Table = () =>
  <table className="ui celled striped table">
    <thead>
      <tr>
        <th>姓名</th>
        <th>职务</th>
        <th>单位名称</th>
        <th> <i className="large blue plus icon"></i> </th>
      </tr>
    </thead>
    <tbody>
      {
        companies.map( (company, idx) => <TableRow {...company} key={idx}/> )
      }
    </tbody>
  </table>

class Companies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>合作企业</h1>

        <Table />
      </div>
    );
  }
}

export default Companies;
