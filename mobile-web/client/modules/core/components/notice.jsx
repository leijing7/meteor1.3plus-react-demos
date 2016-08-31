import React from 'react';
import marked from 'marked'

const listStyle = {
  listStylePosition: 'inside',
  padding: 10
}

const Notice = ({text}) => (
  <div>
    <img src="imgs/mag.png" width="100%"/>
    <h3 className="ui center aligned header">征稿启事</h3>
    <div dangerouslySetInnerHTML={{__html: marked(text)}} style={listStyle}/>
  </div>
);

export default Notice;
