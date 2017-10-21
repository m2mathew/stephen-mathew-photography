// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import TopNav from './root/top-nav';
import logo from './logo.svg';
import './App.css';

// Component Definition
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stephen Mathew Photography</h1>
        </header>
        <p className="App-intro">
          Photography & Videography
        </p>
      </div>
    );
  }
}

export default App;
