import React from 'react';
import {companies} from '/lib/mocking';



const CoCompanies = () => (
  <div>
    <img src="imgs/home-top.png" width="100%"/>
    <p style={{fontSize: '1.1em', paddingLeft: 10, paddingTop: 10}}><strong> 核行业知名企业 </strong></p>
    <div className="ui celled grid">
      <div className="row" style={{fontSize: '1.2em'}}>
        <div className="three wide column">
        <strong>姓名</strong>
        </div>
        <div className="four wide column">
        <strong>职务</strong>
        </div>
        <div className="nine wide column">
        <strong>单位名称</strong>
        </div>
      </div>
    </div>
    <div className="ui grid">
      {
        companies.map( (company, idx) =>
          <div key={idx} className="row" style={{paddingLeft: 15}}>
            <div className="three wide column">
            {company.committee}
            </div>
            <div className="four wide column">
            {company.title}
            </div>
            <div className="nine wide column">
            {company.name}
            </div>
          </div>
        )
      }
    </div>
  </div>
);

export default CoCompanies;
