import React, { Component } from 'react';
import DryerContainer from './components/DryerContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Programare uscatorie</h1>
        </header>
        <DryerContainer />
      </div>
    );
  }
}

export default App;
