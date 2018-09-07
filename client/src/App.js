import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot, 
  XAxis,
  YAxis,
  LineSeries, 
  VerticalGridLines, 
  HorizontalGridLines
} from 'react-vis';
import receiveData from './socket';

class App extends Component {
  constructor(props) {
    super(props)
    let timeArray = []
    let tempArray = []
    let numReadings = 25

    receiveData((err, content) => {
      if(timeArray.length > numReadings) {
        timeArray.shift()
        tempArray.shift()
      }
      timeArray.push(content.time)
      tempArray.push(content.sensorData.temperature)
      this.setState({ 
        time: timeArray,
        temp: tempArray
      })
    })
  }

  state = {
    time: [],
    temp: []
  }

  render() {

    const data = this.state.temp.map((temp, i) => {
      return {x: i, y: temp}
    })

    return (
      <div className="App">
      <h1 className="temp-header">Current Temp (F): {this.state.temp[this.state.temp.length - 1]}</h1>
        <XYPlot yDomain={[50,100]} height={600} width= {900}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis
            title="Time"
            tickFormat={v => `${this.state.time[v]}`} tickLabelAngle={-90} />
          <YAxis
            title="Temp (F)" />
          <LineSeries 
            color="blue"
            data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default App;


