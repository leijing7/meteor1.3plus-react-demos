import React from 'react';
import {Color} from '/lib/util.js'

const Row = ({arr, style}) =>
  <div className="row">
    <Grid style={style} val={arr[0]} />
    <Grid style={style} val={arr[1]} />
    <Grid style={style} val={arr[2]} />
    <Grid style={style} val={arr[3]} />
  </div>

class Grid extends React.Component {
  clicked(){
    // $(`#shapeId${this.props.val}`).shape('flip over');
    FlowRouter.go('/w/company')
  }
  render(){
    return (
      <div className="column" style={this.props.style} onClick={this.clicked.bind(this)}>
        <div className="ui shape" id={`shapeId${this.props.val}`}>
          <div className="sides">
            <div className="active side">
              <div className="content">
                {this.props.val}
              </div>
            </div>
            <div className="side">
              <div className="content">
                <span style={{color: 'magenta'}}>{this.props.val}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Grids = () => {
  const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  const titleH = h - w
  const gridH = w/4

  const titleStyle = {
    fontSize: '3.5em',
    height: titleH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStyle: 'solid',
    borderColor: Color.middleGray,
    borderBottomWidth: 'thin',
    background: "linear-gradient(#fff0f7, #f49a9a)"
  }
  const gridStyle = {
    fontSize: '2em',
    height: gridH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div>
      <div style={titleStyle}>
        新闻/广告
      </div>
      <div className="ui equal width center aligned internally celled grid">
        <Row arr={[1,2,3,4]} style={gridStyle}/>
        <Row arr={[5,6,7,8]} style={gridStyle}/>
        <Row arr={[9,10,11,12]} style={gridStyle}/>
        <Row arr={[13,14,15,16]} style={gridStyle}/>
      </div>
    </div>
  )
}

export default Grids;
