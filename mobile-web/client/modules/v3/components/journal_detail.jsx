import React from 'react';
import {latestArticles, apiLinks} from '/lib/mocking';

class JournalDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    DocHead.setTitle('期刊详情')
    // DocHead.addMeta({name:"format-detection", content:"telephone=no"})
    const deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    const imgBoxStyle = {
      border: 'thin solid',
      borderRightWidth: 0,
      borderTopWidth: 0,
      borderColor: 'grey',
      flex: 0.3,
      height: deviceWidth/3,
      background: `linear-gradient(to top left,
             rgba(0,0,0,0) 0%,
             rgba(0,0,0,0) calc(50% - 0.8px),
             rgba(0,0,0,1) 50%,
             rgba(0,0,0,0) calc(50% + 0.8px),
             rgba(0,0,0,0) 100%),
         linear-gradient(to top right,
             rgba(0,0,0,0) 0%,
             rgba(0,0,0,0) calc(50% - 0.8px),
             rgba(0,0,0,1) 50%,
             rgba(0,0,0,0) calc(50% + 0.8px),
             rgba(0,0,0,0) 100%)`
    }
    const contentBoxStyle = {
      border: 'thin solid',
      borderColor: 'grey',
      borderTopWidth: 0,
      flex: 0.7,
      height: deviceWidth/3,
      fontSize: '0.95em'
    }
    return (
      <div>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-flex">
              <div className="weui-flex__item" style={imgBoxStyle} />
              <div className="weui-flex__item" style={contentBoxStyle}>
                <div style={{margin: 10}}>
                  <h4>中国社会科学</h4>
                  <p>主办单位: 中国社会科学院</p>
                  <p>出版周期: 月刊</p>
                  <p>ISSN: 1002-4921</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="weui-cells__title">期刊简介</div>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text">
              <p>  《中国社会科学》是中国社会科学院主管并主办的综合性社会科学期刊，1980年1月创刊，系月刊。主要发表我国人文社会科学领域最新和最重要的学术研究成果。创刊以来，《中国社会科学》始终坚持以马克思主义为指导，坚持正确的政治方向；坚持理论联系实际，关注重大现实问题；坚持刊物的学术性，追求学术创新和学术规范。</p>
            </div>
          </div>
        </div>

        <div className="weui-cells__title">主要栏目</div>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text">
              <p>   图书评介、读者评议、学术述评、调查报告、论文摘要、学术综述、学术通讯、专题研究</p>
            </div>
          </div>
        </div>

        <div className="weui-cells__title">投稿要求</div>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text">
              <p>  所投稿件须系作者独立研究完成之作品，对他人知识产权有充分尊重，无任何违法、违纪和违反学术道德的内容。按学术研究规范和《中国社会科学》编辑部的有关规定，认真核对引文、注释和文中使用的其他资料，确保引文、注释和</p>
            </div>
          </div>
        </div>

        <div className="ui equal width center aligned padded grid">
          <div className="row">
            <div className="ui segment column" onClick={()=>window.location.href = apiLinks.search}>
              稿件查询进度
            </div>
            <div className="ui segment column" >
              缴纳版面费
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default JournalDetail;
