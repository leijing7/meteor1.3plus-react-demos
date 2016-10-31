import React from 'react';

const FavoriteConf = () => {
  DocHead.setTitle('会议关注')
  return (
    <div className="ui celled list">
      <div className="item" style={{padding: 20}}>
        <p>纪念孙中山诞辰 150 周年学术研讨会</p>
        <div className="right floated content">
          <div>北京</div>
        </div>
        <div className="content">
          10-20
        </div>
      </div>
      <div className="item" style={{padding: 20}}>
        <p>纪念孙中山诞辰 150 周年学术研讨会</p>
        <div className="right floated content">
          <div>北京</div>
        </div>
        <div className="content">
          10-20
        </div>
      </div>
    </div>
  )
}

export default FavoriteConf;
