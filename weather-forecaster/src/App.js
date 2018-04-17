import React, { Component } from 'react';
import './App.css';
import WeatherContainer from './WeatherContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kate's Weather Forecasting App</h1>
        </header>
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
