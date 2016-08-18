import React from 'react';
import {Color} from '/lib/util';
import 'weui/dist/style/weui.min.css';

const Title = ({text}) => (
  <div
    className="weui_panel_hd"
    style={{
      backgroundColor: Color.middleGray,
      color: 'black',
      fontSize: '1.2em'
    }}>
    {text}
  </div>
)

const ExpertItem = ({imgSrc, name, description}) => (
  <div className="weui_panel weui_panel_access column">
    <div className="weui_panel_bd">
      <a href="javascript:void(0);" className="weui_media_box weui_media_appmsg">
        <div className="weui_media_hd">
          <img className="weui_media_appmsg_thumb" src={imgSrc} alt=""/>
        </div>
        <div className="weui_media_bd">
          <h4 className="weui_media_title">{name}</h4>
          <p className="weui_media_desc">
            中国田径队 <br />
            110 米跨栏
          </p>
        </div>
      </a>
    </div>
  </div>
)

const expertInfo1 = {
  imgSrc: 'imgs/lx.jpeg',
  name: '刘翔',
  description: '中国田径队 <br /> 110 米跨栏'
}
const expertInfo2 = {
  imgSrc: 'imgs/fyh.jpg',
  name: '傅园慧',
  description: '中国游泳队 <br /> 100 米仰泳'
}
const expertInfo3 = {
  imgSrc: 'imgs/zmx.jpeg',
  name: '张梦雪',
  description: '中国射击队 <br /> 10 气手枪'
}
const expertInfo4 = {
  imgSrc: 'imgs/sy.jpg',
  name: '孙杨',
  description: '中国游泳队 <br /> 200 米自由泳'
}

const Home = () => {
  return (
    <div>
      <img src="imgs/home-top.png" width="100%"/>
      <Title text={'专家'}/>
      <div className='ui two column grid'>
        <div className='row'>
          <ExpertItem {...expertInfo1} />
          <ExpertItem {...expertInfo2} />
          <ExpertItem {...expertInfo3} />
          <ExpertItem {...expertInfo4} />
        </div>
      </div>

      <div className="weui_panel weui_panel_access">
        <Title text={'专访'}/>
        <div className="weui_panel_bd">
            <a href="javascript:void(0);" className="weui_media_box weui_media_appmsg">
                <div className="weui_media_hd">
                    <img className="weui_media_appmsg_thumb" src="imgs/fyh.jpg" alt=""/>
                </div>
                <div className="weui_media_bd">
                    <h4 className="weui_media_title">傅园慧</h4>
                    <p className="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
            </a>
            <a href="javascript:void(0);" className="weui_media_box weui_media_appmsg">
                <div className="weui_media_hd">
                    <img className="weui_media_appmsg_thumb" src="imgs/lx.jpeg" alt=""/>
                </div>
                <div className="weui_media_bd">
                    <h4 className="weui_media_title">傅园慧</h4>
                    <p className="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
            </a>
        </div>
      </div>
    </div>
  )
};

export default Home;
