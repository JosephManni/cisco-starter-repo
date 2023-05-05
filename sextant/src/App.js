import './App.css';
import React, { Component } from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";


function App() {
  return (
    <div className="App">
      <Banner bannerContent="Sextant - Dashboard"/>
      <Exhibit exhibitTitle="Exhibit A" 
              IPv4='https://api.ipify.org?format=json'
              IPv6='https://api64.ipify.org?format=json'>
      </Exhibit>    
    </div>
  );
}

export default App;
