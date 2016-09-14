import React from 'react';
import marked from 'marked'

const listStyle = {
  listStylePosition: 'inside',
  padding: 10
}

const Notice = ({text}) => {

  return(
    <div>
      <img src="/imgs/mag.png" width="100%"/>
      <div dangerouslySetInnerHTML={{__html: marked(text || "空")}} style={listStyle}/>
    </div>
  )
}

export default Notice;
