// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
    <div class="bgimg w3-display-container w3-grayscale-min" id="home">
      <div class="w3-display-middle w3-center">
        <span class="w3-text-white w3-hide-small large_txt">AIRANG</span>
        <p><a href="#menu" class="w3-button w3-xxlarge w3-black">로그인</a></p>
        <p><a href="#menu" class="w3-button w3-xxlarge w3-black">회원가입</a></p>
      </div>
    </div>
  );
}
}

export default App;
/*
function App() {
  return (
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
);
}
*/
