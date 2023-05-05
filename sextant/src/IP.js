import React, { useState, useEffect, Component } from 'react';

class IPComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url1: props.IPv4,
      url2: props.IPv6,
      IPv4: null,
      IPv6: null,
    };
  }

  componentDidMount() {
    fetch(this.state.url1)
      .then((res) => res.json())
      .then((data) => this.setState({ IPv4: data.ip }));
    fetch(this.state.url2)
      .then((res) => res.json())
      .then((data) => this.setState({ IPv6: data.ip }));
  }

  render() {
    return (
      <div className="user-ip">
        <p>IPv4: {this.state.IPv4}</p>
        <p>IPv6: {this.state.IPv6}</p>
      </div>
    );
  }
}

export default IPComponent;
