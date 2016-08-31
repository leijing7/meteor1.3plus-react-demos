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

class Titles extends React.Component {
  itemClicked(){
    const param = FlowRouter.getQueryParam('item')
    FlowRouter.go(`/p/${this.props.id}?item=${param}`)
  }
  render() {
    return (
      <div style={{paddingTop: 20, paddingLeft: 10, paddingRight: 10}} onClick={this.itemClicked.bind(this)}>
        <p style={{fontSize: '1.15em'}}>&nbsp; <span style={{fontSize: '0.65em'}}>&#9670;</span>  {this.props.title} </p>
        <div className="ui fitted divider"/>
      </div>
    )
  }
}

const Journals = () => {
  const activeItem = FlowRouter.getQueryParam('item')
  let content = <MagazineList />
  switch (activeItem) {
    case 'strategy':
      content = strategies.map( (s, idx) => <Titles title={s.title} key={idx} id={'asdfsd'}/>)
      break;
    case 'skill':
      content = skills.map( (s, idx) => <Titles title={s.title} key={idx} id={'asdfsd'}/>)
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
