import React from 'react';
import marked from 'marked'

const listStyle = {
  listStylePosition: 'inside',
  padding: 10
}

const Notice = ({text}) => {
  const imgStyle = {
    borderTop: 'solid #f49a9a',
    borderBottom:'solid #f49a9a'
  }
  return(
    <div>
      <img src="/imgs/zghd.png" width="100%" style={imgStyle}/>
      <div dangerouslySetInnerHTML={{__html: marked(text || "空")}} style={listStyle}/>
    </div>
  )
}

export default Notice;
