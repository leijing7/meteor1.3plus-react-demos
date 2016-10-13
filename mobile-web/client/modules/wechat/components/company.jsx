import React from 'react';
import marked from 'marked'

const listStyle = {
  listStylePosition: 'inside',
  padding: 10
}

const Company = () => {
  const imgStyle = {
    borderTop: 'solid #f49a9a',
    borderBottom:'solid #f49a9a'
  }
  return(
    <div>
      <img src="/imgs/zghd.png" width="100%" style={imgStyle}/>

      <div className="weui_cells_title">
        <span style={{fontSize: '1.2em'}}>中国核工业集团公司</span>
      </div>

      <div className="weui_cells">
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> 公司性质 </p>
          </div>
          <div className="weui_cell__ft">
            {}
          </div>
        </div>
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> 成立时间 </p>
          </div>
          <div className="weui_cell__ft">
            {}
          </div>
        </div>
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> 经营范围 </p>
          </div>
          <div className="weui_cell__ft">
            {}
          </div>
        </div>
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> 员工人数 </p>
          </div>
          <div className="weui_cell__ft">
            {}
          </div>
        </div>
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> 公共邮箱 </p>
          </div>
          <div className="weui_cell__ft">
            {}
          </div>
        </div>
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> 通讯地址 </p>
          </div>
          <div className="weui_cell__ft">
            {}
          </div>
        </div>
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> 公司官网 </p>
          </div>
          <div className="weui_cell__ft">
            {}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company;
