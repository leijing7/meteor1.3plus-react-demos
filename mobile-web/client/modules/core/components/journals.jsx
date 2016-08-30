import React from 'react';
import JournalNavBar from './journal_nav_bar';
import {magazines, strategies, skills} from '/lib/mocking';

const MagazineList = () =>
  <div className="ui grid" style={{paddingTop: 20}}>
    {
      magazines.map( (m, idx) =>
        <div className="eight wide mobile column" key={idx}>
          &nbsp; <strong>&#9670;</strong> {m.name}
        </div>
      )
    }
  </div>

const Titles = ({title}) =>
  <div style={{paddingTop: 10, paddingLeft: 10, paddingRight: 15}}>
    <p style={{fontSize: '1.15em'}}> &nbsp; <strong>&#9670; </strong> {title} </p>
    <div className="ui fitted divider"/>
  </div>

const Journals = () => {
  const activeItem = FlowRouter.getQueryParam('item')
  let content = <MagazineList />
  switch (activeItem) {
    case 'strategy':
      content = strategies.map( (s, idx) => <Titles title={s.title} key={idx} />)
      break;
    case 'skill':
      content = skills.map( (s, idx) => <Titles title={s.title} key={idx} />)
      break;
  }
  return (
    <div>
      <JournalNavBar activeItem={activeItem}/>
      <img src="/imgs/mag.png" width="100%" alt="image"/>
      {content}
    </div>
  )
};

export default Journals;
