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
    testFunction((err, content) => {
      this.setState({ 
        time: content.time,
        temp: content.sensorData.temperature
      })
    })
  }

  state = {
    time: [],
    temp: []
  }

  render() {

    const data = [
      {x: 0, y: this.state.temp},
    ];

    return (
      <div className="App">
      <h1>TEMP DEG F: {this.state.temp}</h1>
        <XYPlot height={600} width= {600}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default App;


