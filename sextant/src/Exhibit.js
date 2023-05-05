import './exhibit.css';
import React, { Component } from "react";
import LineChart from './components/LineChart';
import IPComponent from './IP';

class Exhibit extends Component {
  render() {
    const { exhibitTitle, latency, url } = this.props;
    const color = latency < 99 ? 'green' : latency < 199 ? 'yellow' : 'red'; // Change the thresholds and colors as needed
    return (
      <div className="exhibit">
        <div className="exhibit-header">
          <h3>{exhibitTitle}</h3>
          <p style={{ color }}>Latency: {latency} (m/s)</p>
        </div>
        <LineChart></LineChart>
        <IPComponent url={url}></IPComponent>
      </div>
    );
  }
}

export default Exhibit;
