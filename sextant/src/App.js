import './App.css';
import React, { Component } from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IPComponent from './IP';
import PylonConnection from './PlyonCon';

function App() {
  return (
    <div className="App">
      <Banner bannerContent="Sextant - Dashboard"/>
      <Exhibit exhibitTitle="Exhibit A" 
              latency="10" 
              url='https://api.ipify.org?format=json'/>
      <Exhibit exhibitTitle="Exhibit B" 
              latency="150" 
              url='https://api64.ipify.org?format=json'/>
      <Exhibit exhibitTitle="Exhibit C" 
              latency="60" 
              url='https://api.ipify.org?format=json'/>
      <Exhibit exhibitTitle="Exhibit D" 
              latency="250" 
              url='https://api64.ipify.org?format=json'/>
      
    </div>
  );
}

export default App;
