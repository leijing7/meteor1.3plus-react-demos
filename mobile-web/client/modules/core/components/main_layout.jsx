import React from 'react';
import FootBar from './foot_bar';
import JournalFootBar from './journal_foot_bar';


export const MainLayout = ({content = () => null }) => {
  const containerStyle = {
    height: $(window).height() - 36,
    overflow: 'auto'
  }
  return(
    <div>
      <div style={containerStyle} className="weui_tab_bd">
        {content()}
      </div>

      <FootBar/>
    </div>
  )
};

export const JournalLayout = ({content = () => null }) => {
  const containerStyle = {
    height: $(window).height() - 36,
    overflow: 'auto'
  }
  return(
    <div>
      <div style={containerStyle} className="weui_tab_bd">
        {content()}
      </div>

      <JournalFootBar/>
    </div>
  )
};

export const PostLayout = ({content = () => null }) => {
  return(
    <div>
      {content()}
    </div>
  )
};
