import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sukienclick from './Component/sukienclick.js';
import Btnclick from './Component/btnclick.js';
import Conditional from './Component/conditional.js';

class App extends React.Component {
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <h1 className="App-title"> <Sukienclick/>  </h1></p>
          <Btnclick/>
          <Conditional/>
        </header>
      </div>
    );
  }
  
}

export default App;
