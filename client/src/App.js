import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot, 
  XAxis,
  YAxis,
  LineSeries, 
  VerticalBarSeries,
  VerticalGridLines, 
  HorizontalGridLines
} from 'react-vis';
import testFunction from './socket';

class App extends Component {
  constructor(props) {
    super(props)
    let timeArray = []
    let tempArray = []

    testFunction((err, content) => {
      timeArray.push(content.time)
      tempArray.push(content.sensorData.temperature)
      console.log(timeArray)
      console.log(tempArray)
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

    console.log(data);

    return (
      <div className="App">
      <h1>Current Temp (F): {this.state.temp[this.state.temp.length - 1]}</h1>
        <XYPlot yDomain={[50,100]} height={600} width= {600}>
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


