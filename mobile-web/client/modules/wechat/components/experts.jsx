import React from 'react';
import {Color, genRandomInRange} from '/lib/util'
import {experts} from '/lib/mocking'

const Row = ({arr, style}) =>
  <div className="row">
    <Grid style={style} val={arr[0]} />
    <Grid style={style} val={arr[1]} />
    <Grid style={style} val={arr[2]} />
    <Grid style={style} val={arr[3]} />
  </div>

class Grid extends React.Component {
  clicked(){
    FlowRouter.go('/w/expert?id=' + this.expertIdx)
  }
  genRandomExpert(){
    this.expertIdx = genRandomInRange(0, 3)
    return experts[this.expertIdx]
  }
  render(){
    const imgStyle = {
      marginLeft: -14,
      marginTop: -14,
      width: this.props.style.width,
      height: this.props.style.height
    }
    const textStyle = {
      fontSize: '2.5em',
      background: "linear-gradient(#fff0f7, #f49a9a)",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: -14,
      marginTop: -14,
      width: this.props.style.width,
      height: this.props.style.height
    }
    return (
      <div className="column" style={this.props.style} onClick={this.clicked.bind(this)}>
        <div className="ui shape" id={`shapeId${this.props.val}`}>
          <div className="sides" >
            <div className="active side">
              <div style={textStyle}>
                {this.props.val}
              </div>
            </div>
            <div className="side">
              <img src={this.genRandomExpert().imgUrl} style={imgStyle}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const genRandomPosSet = () => {
  const MaxFlipCount = 4
  //use set to avoid same position grid flipped twice
  let posSet = new Set()
  for (let i=0; i<MaxFlipCount; i++) {
    posSet.add(genRandomInRange(1, 16))
  }
  return posSet
}

class Experts extends React.Component {
  componentWillUnmount(){
    clearInterval(this.intervalHandle)
  }
  flipGrids(){
    const FlipInterval = 4000
    this.intervalHandle = setInterval( ()=>{
      const posSet = genRandomPosSet()
      console.log(posSet);
      for (let pos of posSet) {
        $(`#shapeId${pos}`).shape('flip over')
      }
    }, FlipInterval)
  }
  render(){
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
      width: gridH,
      height: gridH
    }
    this.flipGrids()
    return (
      <div>
        <div style={titleStyle}>
          采访/广告
        </div>
        <div className="ui equal width internally celled grid">
          <Row arr={[1,2,3,4]} style={gridStyle}/>
          <Row arr={[5,6,7,8]} style={gridStyle}/>
          <Row arr={[9,10,11,12]} style={gridStyle}/>
          <Row arr={[13,14,15,16]} style={gridStyle}/>
        </div>
      </div>
    )
  }
}

export default Experts;
