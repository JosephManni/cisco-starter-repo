import './App.css';
import React, { Component } from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IPComponent from './IP';

function App() {
  return (
    <div className="App">
      <Banner bannerContent="Sextant - Dashboard"/>
      <Exhibit exhibitTitle="Exhibit A" latency="10" url='https://api.ipify.org?format=json'></Exhibit>
      <Exhibit exhibitTitle="Exhibit B" latency="150" url='https://api64.ipify.org?format=json'></Exhibit>
      <Exhibit exhibitTitle="Exhibit C" latency="250" url='https://api64.ipify.org?format=json'></Exhibit>
      
    </div>
  );
}

export default App;
