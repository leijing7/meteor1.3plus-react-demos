// import React from 'react';
import {conferences} from '/lib/mocking';
import moment from "moment"

const TableRow = ({name, date, suburb, address}) =>
  <tr>
    <td>{name}</td>
    <td>{moment(date).format('YYYY-MM-DD')}</td>
    <td>{suburb}</td>
    <td>{address}</td>
    <td><i className="blue edit icon" /></td>
  </tr>

const Table = () =>
  <table className="ui celled striped table">
    <thead>
      <tr>
        <th>会议</th>
        <th>日期</th>
        <th>地区</th>
        <th>详细地址</th>
        <th> <i className="large blue plus icon"></i> </th>
      </tr>
    </thead>
    <tbody>
      {
        conferences.map( (conf, idx) => <TableRow {...conf} key={idx}/> )
      }
    </tbody>
  </table>

class Conferences extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>行业会议</h1>
        <Table />
      </div>
    );
  }
}

export default Conferences;
