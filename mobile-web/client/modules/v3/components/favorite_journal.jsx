import React from 'react';

const FavoriteJournal = () => {
  DocHead.setTitle('期刊收藏')
  return (
    <div className="ui middle aligned divided list">
      <div className="item" style={{padding: 10}}>
        <div className="right floated content">
          <div>栾普贵</div>
        </div>
        <div className="content">
          "十三五" 会计研究的八个思考
        </div>
      </div>
    </div>
  )
}

export default FavoriteJournal;
