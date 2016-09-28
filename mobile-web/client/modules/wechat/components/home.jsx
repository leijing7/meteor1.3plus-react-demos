import React from 'react';
import {Color} from '/lib/util.js'

const Home = () => {
  const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  const divH = h/3

  const gridStyle = {
    height: divH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const adStyle = {
    height: divH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: "linear-gradient(#fff0f7, #f49a9a)"
  }
  const iconStyle = {
    color: "grey"
  }
  const textStyle = {
    fontSize: '1.4em',
    color: Color.textColor
  }
  return (
    <div>
      <div className="ui equal width center aligned internally celled grid">
        <div className="row">

          <div className="column" style={gridStyle}>
            <div onClick={()=>FlowRouter.go('/w/co')}>
              <i className="huge users icon" style={iconStyle}/>
              <br />
              <br />
              <span style={textStyle}>企业合作</span>
            </div>
          </div>

          <div className="column" style={gridStyle}>
            <div onClick={()=>FlowRouter.go('/w/experts')}>
              <i className="huge student icon" style={iconStyle}/>
              <br />
              <br />
              <span style={textStyle}>核电专家</span>
            </div>
          </div>
        </div>

        <div className="row" style={adStyle}>
          <div style={{fontSize: '5em'}}>
            广告
          </div>
        </div>
        
        <div className="row">

          <div className="column" style={gridStyle}>
            <div onClick={()=>FlowRouter.go('/w/conf')}>
              <i className="huge list icon" style={iconStyle}/>
              <br />
              <br />
              <span style={textStyle}>行业会议</span>
            </div>
          </div>



          <div className="column" style={gridStyle}>
            <div onClick={()=>FlowRouter.go('/w/submission')}>
              <i className="huge send icon" style={iconStyle}/>
              <br />
              <br />
              <span style={textStyle}>我要投稿</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Home;

// const Home = () => {
//   const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
//   const divH = h/3
//
//   const iconStyle = {
//     color: "grey"
//   }
//
//   const containerStyle = {
//     height: h,
//     display: '-webkit-flex',
//     display: 'flex',
//     flexDirection: 'column',
//     flex: 1
//   }
//   const rowStyle = {
//     borderStyle: 'solid',
//     display: 'flex',
//     flexDirection: 'row',
//     flex: 0.333
//   }
//   const gridStyle = {
//     borderStyle: 'solid',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//     width: '100%'
//   }
//
//   return (
//     <div style={containerStyle}>
//       <div style={rowStyle}>
//         <div style={gridStyle}>
//           <i className="massive zoom icon" style={iconStyle}/>
//         </div>
//         <div style={gridStyle}> 2 </div>
//       </div>
//       <div style={rowStyle}>
//         <div style={gridStyle}>
//           广告
//         </div>
//       </div>
//       <div style={rowStyle}>
//         <div style={gridStyle}> 3 </div>
//         <div style={gridStyle}> 4 </div>
//       </div>
//     </div>
//   )
// }
