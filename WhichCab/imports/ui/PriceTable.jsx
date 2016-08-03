import React from 'react';

export const PriceTable = () =>
  <table className="ui celled striped table">
    <thead>
      <tr>
        <th>项目</th>
        <th>滴滴</th>
        <th>Uber</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>元/每公里</td>
        <td>1.3</td>
        <td>1.7</td>
      </tr>
      <tr>
        <td>元/每分钟</td>
        <td>0.3</td>
        <td>0.35</td>
      </tr>
      <tr>
        <td>优惠力度</td>
        <td>10</td>
        <td>15</td>
      </tr>
    </tbody>
  </table>
