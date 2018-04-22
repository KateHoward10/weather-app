import React, { Component } from 'react';
import './App.css';
import WeatherContainer from './WeatherContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather Forecaster</h1>
        </header>
        <p>To begin, search for a location.</p>
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
