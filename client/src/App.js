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
    testFunction((err, content) => this.setState({ 
      temp: content.sensorData.temperature
    }));
  }

  state = {
    temp: ''
  }

  render() {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    return (
      <div className="App">
        {/* <XYPlot height={600} width= {600}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={data} />
        </XYPlot> */}
        <h1>TEMP IS: {this.state.temp}</h1>
      </div>
    );
  }
}

export default App;


