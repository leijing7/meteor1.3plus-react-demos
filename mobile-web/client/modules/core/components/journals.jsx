import React from 'react';
import 'weui/dist/style/weui.min.css';
import JournalFootBar from './journal_foot_bar';
import {Color} from '/lib/util';
import JournalNavBar from './journal_nav_bar';


const Journals = () => (
  <div>
    <JournalNavBar navBarClassName={0}/>
    <img src="imgs/mag.png" width="100%"/>





    <JournalFootBar item={'journal'}/>
  </div>
);

export default Journals;
