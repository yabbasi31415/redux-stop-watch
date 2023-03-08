import React from 'react';
import {Buttons} from '../buttons/buttons';
import {Clock} from '../clock/clock';
import { LogTable } from "../logTable/logTable";
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Buttons />
        <LogTable />
      </header>
    </div>
  );
}

export default App;
