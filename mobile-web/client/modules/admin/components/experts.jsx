import {experts} from '/lib/mocking';

const ExpertTableRow = ({imgUrl, name, title, description}) =>
  <tr>
    <td><img src={imgUrl} /></td>
    <td>{name}</td>
    <td>{title}</td>
    <td>{description}</td>
    <td><i className="blue edit icon" /></td>
  </tr>

const ExpertTable = () =>
  <table className="ui celled striped table">
    <thead>
      <tr>
        <th>照片</th>
        <th className="one wide">姓名</th>
        <th>职位</th>
        <th>简述</th>
        <th> <i className="large blue plus icon"></i> </th>
      </tr>
    </thead>
    <tbody>
      {
        experts.map( (expert, idx) => <ExpertTableRow {...expert} key={idx}/> )
      }
    </tbody>
  </table>


class Experts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="ui top attached tabular menu">
          <a className="active item" data-tab="first">专家</a>
          <a className="item" data-tab="third">专访</a>
        </div>
        <div className="ui bottom attached active tab segment" data-tab="first">
          <ExpertTable />
        </div>
        <div className="ui bottom attached tab segment" data-tab="second">
          Second
        </div>
      </div>
    );
  }
}

export default Experts;
