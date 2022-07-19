import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Test } from '../src/components';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src="/ts.svg" className="logo ts" alt="Ts logo" />
        </a>
      </div>
      <h1>
        <span className="vite">Vite + </span>
        <span className="react">Solid + </span>
        <span className="ts">Ts</span>
      </h1>
      <div className="card">
        <div className="title">练习黑板</div>
        <div className="card-wrapper">
          <Test />
        </div>
      </div>
    </div>
  );
}

export default App;
