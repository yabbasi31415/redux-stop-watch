import React from 'react';
import {Counter} from './features/counter/Counter';
import {Clock} from './clock';
import { LogTable } from "./logTable"
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Counter />
        <LogTable />
      </header>
    </div>
  );
}

export default App;
