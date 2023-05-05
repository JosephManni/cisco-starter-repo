import React, { useState, useEffect, Component } from 'react';

class IPComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: null,
            url: props.url
        };
    }
    
    componentDidMount() {
        fetch(this.state.url).then(res => res.json()).then((data) => this.setState({ ip: data.ip }));
    }


    render() {
        return (
        <div className="user-ip">
            <span>IP: {this.state.ip}</span>
        </div>
        );
    }
}

export default IPComponent;
